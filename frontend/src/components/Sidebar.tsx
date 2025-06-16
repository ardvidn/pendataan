"use client";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import Image from "next/image";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { logged } from "../utils/interface";
import { useRouter } from "next/navigation";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import toast, { Toaster } from "react-hot-toast";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios
      .get<logged>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, { withCredentials: true })
      .then((res) => {
        setUsername(res.data.data.username);
        setIsLoggedIn(res.data.loggedIn);
        setRole(res.data.data.role);
      })
      .catch(() => router.push("/login"));
  }, [router]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/logout`, {}, { withCredentials: true });
      if (res.status && res.status === 200) {
        toast.success("Logout berhasil!");
      }

      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Logout gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Toaster position="top-center" />
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box sx={{ width: "100%", height: "100%" }} display="flex" justifyContent="center" alignItems="center">
            <Button onClick={handleDrawerToggle}>
              <Image src="/geomatrix.jpg" alt="geomatrix" width={30} height={30}></Image>
            </Button>
          </Box>
        </DrawerHeader>

        <List>
          <SidebarItem open useIcon={<CreateNewFolderIcon />} title="OP Baru" link="pendataan/op_baru" />
          <SidebarItem open useIcon={<SystemUpdateAltIcon />} title="OP Update" link="pendataan/op_update" />
          <SidebarItem open useIcon={<DeleteSweepIcon />} title="OP Hapus" link="pendataan/op_hapus" />
          {role === "admin" && <SidebarItem open useIcon={<SupervisorAccountIcon />} title="Admin" link="pendataan/master/pengguna" />}
        </List>

        <Box sx={{ flexGrow: 1 }}></Box>
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
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
                <Image src="/geomatrix.jpg" alt="geomatrix" width={25} height={25}></Image>
              </ListItemIcon>
              <ListItemText
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              >
                {username}
              </ListItemText>
              <ListItemText
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              >
                <Button
                  variant="contained"
                  disabled={!isLoggedIn || loading}
                  sx={{
                    bgcolor: "#FFC107",
                    color: "#000",
                    "&:hover": {
                      bgcolor: "#E0A800",
                    },
                  }}
                  startIcon={<LogoutIcon />}
                  onClick={handleLogout}
                ></Button>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
