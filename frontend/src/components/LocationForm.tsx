// import { useState, useEffect } from "react";
// import { Grid2, TextField, Typography, Divider, Box } from "@mui/material";
// import dynamic from "next/dynamic";

// // Dynamically import the Leaflet map to avoid SSR issues
// const MapWithNoSSR = dynamic(() => import("./LeafletMap"), {
//   ssr: false,
// });

// const LocationForm = ({ nop }: { nop: string }) => {
//   const [location, setLocation] = useState({
//     latitude: "",
//     longitude: "",
//     address: "",
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch existing location data based on NOP
//     const fetchLocationData = async () => {
//       try {
//         // Replace with actual API call
//         const response = await fetch(`/api/location/${nop}`);
//         const data = await response.json();
//         setLocation(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching location data:", error);
//         setLoading(false);
//       }
//     };

//     if (nop) {
//       fetchLocationData();
//     }
//   }, [nop]);

//   const handleLocationChange = (newLocation: any) => {
//     setLocation(newLocation);
//   };

//   const handleCoordinateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLocation({ ...location, [name]: value });

//     // If both coordinates are filled, update the address (reverse geocode)
//     if (name === "latitude" || name === "longitude") {
//       if (location.latitude && location.longitude) {
//         // Call reverse geocoding API here
//         // For now, just set a mock address
//         setLocation((prev) => ({
//           ...prev,
//           address: `Alamat untuk ${prev.latitude}, ${prev.longitude}`,
//         }));
//       }
//     }
//   };

//   if (loading) {
//     return <Typography>Loading location data...</Typography>;
//   }

//   return (
//     <Grid2 container spacing={3} sx={{ mt: 2 }}>
//       <Grid2 item xs={12}>
//         <Typography variant="h6" gutterBottom>
//           Lokasi Properti
//         </Typography>
//         <Divider />
//       </Grid2>

//       <Grid2 item xs={12} md={6}>
//         <Box sx={{ height: "400px", width: "100%" }}>
//           <MapWithNoSSR latitude={parseFloat(location.latitude) || -6.2088} longitude={parseFloat(location.longitude) || 106.8456} onLocationChange={handleLocationChange} />
//         </Box>
//       </Grid2>

//       <Grid2 item xs={12} md={6}>
//         <Grid2 container spacing={2}>
//           <Grid2 item xs={12} md={6}>
//             <TextField fullWidth label="Latitude" name="latitude" value={location.latitude || ""} onChange={handleCoordinateChange} />
//           </Grid2>
//           <Grid2 item xs={12} md={6}>
//             <TextField fullWidth label="Longitude" name="longitude" value={location.longitude || ""} onChange={handleCoordinateChange} />
//           </Grid2>
//           <Grid2 item xs={12}>
//             <TextField
//               fullWidth
//               label="Alamat"
//               name="address"
//               value={location.address || ""}
//               InputProps={{
//                 readOnly: true,
//               }}
//               multiline
//               rows={4}
//             />
//           </Grid2>
//         </Grid2>
//       </Grid2>
//     </Grid2>
//   );
// };

// export default LocationForm;
