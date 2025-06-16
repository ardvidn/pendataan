"use client";

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Modal, Box, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { logged } from "@/utils/interface";

export default function MobileNavbar({ username }: { username: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios
      .get<logged>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, { withCredentials: true })
      .then((res) => {
        setRole(res.data.data.role);
      })
      .catch(() => router.push("/login"));
  }, [router]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/logout`, {}, { withCredentials: true });
      if (res.status === 200) {
        toast.success("Logout berhasil!");
        router.push("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Logout gagal!");
    } finally {
      setLoading(false);
      handleCloseMenu();
    }
  };

  const goTo = (path: string) => {
    router.push(path);
    setModalOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#219EBC" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setModalOpen(true)}>
            <MoreVertIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            {username}
          </Typography>

          <IconButton edge="end" color="inherit" onClick={handleMenu}>
            <AccountCircle />
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={handleLogout} disabled={loading}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* spacer biar content ga ketutup navbar */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            boxShadow: 24,
            width: 250,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#1a1a2e" }} gutterBottom>
            PENDATAAN
          </Typography>
          <Button fullWidth variant="outlined" sx={{ mb: 1 }} onClick={() => goTo("/pendataan/op_baru")}>
            OP Baru
          </Button>
          <Button fullWidth variant="outlined" sx={{ mb: 1 }} onClick={() => goTo("/pendataan/op_update")}>
            OP Update
          </Button>
          <Button fullWidth variant="outlined" sx={{ mb: 1 }} onClick={() => goTo("/pendataan/op_hapus")}>
            OP Hapus
          </Button>
          {role === "admin" && (
            <Button fullWidth variant="outlined" onClick={() => goTo("/pendataan/op_hapus")}>
              Admin Dashboard
            </Button>
          )}
        </Box>
      </Modal>
    </>
  );
}
