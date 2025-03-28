"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/material";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false); // State untuk sidebar buka/tutup

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar open={open} setOpen={setOpen} /> {/* Kirim state ke Sidebar */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s ease",
          marginLeft: "10px", // Sesuaikan dengan width Sidebar
          padding: "16px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
