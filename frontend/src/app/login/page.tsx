"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/login`, { username, password }, { withCredentials: true });

      toast.success("Login berhasil!");

      router.push("/pendataan/op_update");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login gagal!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center" marginBottom={{ xs: 10, md: 0 }}>
        <Box display="flex" flexDirection={{ xs: "column-reverse", md: "row" }} justifyContent="center" alignItems="center" gap={{ xs: 0, md: 20 }}>
          {/* Form Login */}
          <Box p={4} bgcolor="white" boxShadow={3} borderRadius={2} textAlign="center" width={350}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField fullWidth label="Username" variant="outlined" margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 2,
                  bgcolor: "#FFC107",
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#E0A800",
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </Button>
            </form>
          </Box>

          <Box>
            <Image src="/geomatrixfull.jpg" alt="geomatrix" width={400} height={400} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
