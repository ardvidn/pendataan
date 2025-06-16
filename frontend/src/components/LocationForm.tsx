/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, TextField, Typography, IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface GeoInputWithMapProps {
  latitude: any;
  longitude: any;
  setLatitude: React.Dispatch<React.SetStateAction<any>>;
  setLongitude: React.Dispatch<React.SetStateAction<any>>;
  spopData: any;
  setSpopData: React.Dispatch<React.SetStateAction<any>>;
  onValidityChange: (isValid: boolean) => void;
}

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const RecenterMap = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
  return null;
};

export default function GeoInputWithMap({ latitude, longitude, setLatitude, setLongitude, onValidityChange }: GeoInputWithMapProps) {
  const [position, setPosition] = useState<[number, number]>([parseFloat(latitude), parseFloat(longitude)]);
  const [isDraggable, setIsDraggable] = useState(false);
  const [address, setAddress] = useState("");
  const [loadingAddress, setLoadingAddress] = useState(false);
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    if (!isNaN(lat) && !isNaN(lng)) {
      setPosition([lat, lng]);
      fetchAddress(lat, lng);
    }
  }, [latitude, longitude]);

  const fetchAddress = async (lat: number, lng: number) => {
    setLoadingAddress(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await res.json();
      setAddress(data.display_name || "Alamat tidak ditemukan");
    } catch (err) {
      console.error("Error fetching address:", err);
      setAddress("Gagal mendapatkan alamat");
    } finally {
      setLoadingAddress(false);
    }
  };

  useEffect(() => {
    const isValid = latitude !== 0 && longitude !== 0;
    onValidityChange(isValid);
  }, [latitude, longitude, onValidityChange]);

  const handleGeoTag = () => {
    if (!navigator.geolocation) return alert("Geolocation tidak didukung browser ini.");
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude: lat, longitude: lng } = coords;
        setLatitude(lat.toString());
        setLongitude(lng.toString());
        setPosition([lat, lng]);
        await fetchAddress(lat, lng);
      },
      () => alert("Gagal mendapatkan lokasi."),
      { enableHighAccuracy: true }
    );
  };

  const handleDragEnd = async () => {
    const marker = markerRef.current;
    if (marker) {
      const latlng = marker.getLatLng();
      const { lat, lng } = latlng;
      setLatitude(lat.toString());
      setLongitude(lng.toString());
      setPosition([lat, lng]);
      await fetchAddress(lat, lng);
    }
  };

  return (
    <Box width="100%" px={4}>
      <TextField fullWidth disabled label="Alamat" value={loadingAddress ? "Mendeteksi alamat..." : address} sx={{ mb: 2 }} />

      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2} mb={1}>
        <TextField fullWidth label="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        <TextField fullWidth label="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </Box>

      <IconButton color="error" onClick={handleGeoTag}>
        <RoomIcon />
      </IconButton>

      <Typography variant="body2" sx={{ color: "red", mb: 2 }}>
        Meskipun ada fitur <strong>Geo Location</strong>, pastikan titik lokasinya sudah benar.
      </Typography>

      <Box sx={{ height: 500, width: "100%", borderRadius: 2, overflow: "hidden" }}>
        <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" subdomains={["mt0", "mt1", "mt2", "mt3"]} />
          <RecenterMap position={position} />
          <Marker position={position} draggable={isDraggable} eventHandlers={{ click: () => setIsDraggable(!isDraggable), dragend: handleDragEnd }} ref={markerRef} />
        </MapContainer>
      </Box>
    </Box>
  );
}
