"use client";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarItem = ({ open, useIcon, title, link }: { open: boolean; useIcon: any; title: string; link: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.startsWith(`/${link}`);

  return (
    <ListItem
      key={title}
      disablePadding
      sx={{
        display: "block",
        bgcolor: isActive ? "#FFC107" : "transparent",
      }}
      onClick={() => router.push(`/${link}`)}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: open ? "initial" : "center",
          "&:hover": {
            bgcolor: "#E0A800",
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            mr: open ? 3 : "auto",
            color: isActive ? "#000" : "inherit",
          }}
        >
          {useIcon}
        </ListItemIcon>
        <ListItemText
          primary={title}
          sx={{
            opacity: open ? 1 : 0,
            color: isActive ? "#000" : "inherit",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
