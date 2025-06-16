"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { logged } from "../utils/interface";
import MobileNavbar from "./MobileNavbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState<string>("");
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  useEffect(() => {
    axios
      .get<logged>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsAuthenticated(res.data.loggedIn);
        setUsername(res.data.data.username);
        if (!res.data.loggedIn && pathname !== "/login") {
          router.push("/login");
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
        if (pathname !== "/login") {
          router.push("/login");
        }
      });
  }, [pathname, router]);

  if (isAuthenticated === null) return null;

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100%", width: "100%" }}>
      {isMobile ? <MobileNavbar username={username} /> : <Sidebar open={open} setOpen={setOpen} />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s ease",
          paddingLeft: isMobile ? "0px" : "10px",
          paddingRight: isMobile ? 4 : 1,
          paddingY: isMobile ? 8 : "16px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
