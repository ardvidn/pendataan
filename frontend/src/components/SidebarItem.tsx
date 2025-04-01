"use client";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarItem = ({ open, useIcon, title, link }: { open: boolean; useIcon: any; title: string; link: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === `/${link}`;

  return (
    <ListItem
      key={title}
      disablePadding
      sx={{
        display: "block",
        bgcolor: isActive ? "#FFC107" : "transparent", // Warna latar belakang jika aktif
        // borderRadius: "8px",
      }}
      onClick={() => router.push(`/${link}`)}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: open ? "initial" : "center",
          "&:hover": {
            bgcolor: "#E0A800", // Warna saat hover
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            mr: open ? 3 : "auto",
            color: isActive ? "#000" : "inherit", // Ubah warna ikon jika aktif
          }}
        >
          {useIcon}
        </ListItemIcon>
        <ListItemText
          primary={title}
          sx={{
            opacity: open ? 1 : 0,
            color: isActive ? "#000" : "inherit", // Ubah warna teks jika aktif
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
