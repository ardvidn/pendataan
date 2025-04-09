import { Box, TextField, Typography, IconButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function RecenterMap({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [map, position]);
  return null;
}

const GeoInputWithMap = () => {
  const [latitude, setLatitude] = useState(-3.05097867451981);
  const [longitude, setLongitude] = useState(121.21379730308746);
  const [position, setPosition] = useState<[number, number]>([latitude, longitude]);
  const [isDraggable, setIsDraggable] = useState(false);
  const [address, setAddress] = useState("Mosiaku, Kolaka Utara, Southeast Sulawesi, Indonesia");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markerRef = useRef<any>(null);

  const updateAddress = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
      const data = await res.json();
      setAddress(data.display_name || "Alamat tidak ditemukan");
    } catch (error) {
      console.error("Gagal reverse geocoding:", error);
    }
  };

  const handleGeoTag = () => {
    if (!navigator.geolocation) {
      alert("Geolocation tidak didukung browser ini.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);
        setPosition([lat, lng]);
        await updateAddress(lat, lng);
      },
      () => alert("Gagal mendapatkan lokasi."),
      { enableHighAccuracy: true }
    );
  };

  const toggleDraggable = () => {
    setIsDraggable((prev) => !prev);
  };

  const onMarkerDragEnd = async () => {
    const marker = markerRef.current;
    if (marker != null) {
      const latlng = marker.getLatLng();
      setLatitude(latlng.lat);
      setLongitude(latlng.lng);
      setPosition([latlng.lat, latlng.lng]);
      await updateAddress(latlng.lat, latlng.lng);
    }
  };

  return (
    <Box sx={{ width: "100%" }} paddingX={4}>
      <TextField disabled fullWidth label="Alamat" value={address} onChange={(e) => setAddress(e.target.value)} sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          alignItems: "flex-start",
          mb: 1,
        }}
      >
        <TextField fullWidth label="Latitude" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} />
        <TextField fullWidth label="Longitude" value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value))} />
      </Box>
      <IconButton color="error" onClick={handleGeoTag} sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}>
        <RoomIcon />
      </IconButton>

      <Typography variant="body2" sx={{ mb: 2, color: "red" }}>
        Meskipun ada fitur <strong>Geo Location</strong>, tapi pastikan lagi titik lokasinya dengan benar.
      </Typography>

      <Box sx={{ height: 500, width: "100%", borderRadius: 2, overflow: "hidden" }}>
        <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" subdomains={["mt0", "mt1", "mt2", "mt3"]} />
          <RecenterMap position={position} />
          <Marker
            position={position}
            draggable={isDraggable}
            eventHandlers={{
              click: toggleDraggable,
              dragend: onMarkerDragEnd,
            }}
            ref={markerRef}
          />
        </MapContainer>
      </Box>
    </Box>
  );
};

export default GeoInputWithMap;
