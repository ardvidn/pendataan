"use client";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarItem = ({ open, useIcon, title, link }: { open: boolean; useIcon: any; title: string; link: string }) => {
  const router = useRouter();

  return (
    <ListItem key={title} disablePadding sx={{ display: "block" }} onClick={() => router.push(`/${link}`)}>
      <ListItemButton
        sx={[
          {
            minHeight: 48,
            px: 2.5,
          },
          open
            ? {
                justifyContent: "initial",
              }
            : {
                justifyContent: "center",
              },
        ]}
      >
        <ListItemIcon
          sx={[
            {
              minWidth: 0,
              justifyContent: "center",
            },
            open
              ? {
                  mr: 3,
                }
              : {
                  mr: "auto",
                },
          ]}
        >
          {useIcon}
        </ListItemIcon>
        <ListItemText
          primary={title}
          sx={[
            open
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                },
          ]}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
