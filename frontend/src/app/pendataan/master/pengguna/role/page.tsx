/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { RoleOptions } from "@/utils/interface";
import { Autocomplete, Box, Button, CircularProgress, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import TambahRoleModal from "@/components/TambahRoleModal";

const RolePage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [data, setData] = useState([]);
  const [roles, setRoles] = useState<RoleOptions[]>([]);
  const [selectedRole, setSelectedRole] = useState<RoleOptions | null>(null);
  const [selectedRoleChange, setSelectedRoleChange] = useState<RoleOptions | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [, setTotalPages] = useState(1);

  useEffect(() => {
    const checkRole = async () => {
      try {
        const res = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, {
          withCredentials: true,
        });
        if (res.data?.data?.role !== "admin") {
          router.push("/pendataan/unauthorized");
        } else {
          setLoading(false);
        }
      } catch (error: any) {
        toast.error("terjadi kesalahan saat pengecekan autorisasi", error);
        router.push("/pendataan/op_baru");
      }
    };

    checkRole();
  }, [router]);

  const fetchData = useCallback(
    async (page = 1, limit = itemsPerPage) => {
      try {
        const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getaccountrole?page=${page}&limit=${limit}`);
        setData(response.data.data);
        setTotalItems(response.data.total);
        setTotalPages(response.data.totalPages);
        setCurrentPage(page);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          const { message } = error.response.data;
          toast.error(message || "Data tidak ditemukan!");
        } else {
          toast.error("Terjadi kesalahan saat mengecek role!");
        }
        console.error("Error fetching data:", error);
      }
    },
    [itemsPerPage]
  );

  const fetchSearchData = async (role: string, page = 1, limit = itemsPerPage) => {
    try {
      const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getaccountrolebysearch?selectedrole=${role}&page=${page}&limit=${limit}`);
      setData(response.data.data);
      setTotalItems(response.data.total);
      setTotalPages(response.data.totalPages);
      setCurrentPage(page);
      setIsSearching(true);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        const { message } = error.response.data;
        toast.error(message || "Data tidak ditemukan!");
      } else {
        toast.error("Terjadi kesalahan saat mengecek role!");
      }
      console.error("Error fetching data:", error);
      setIsSearching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const fetchRoles = async () => {
      setLoading(true);
      try {
        const response = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getaccountrole`);
        setRoles(response.data.data || []);
      } catch (error) {
        console.error("Gagal memuat data role:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const currentPath = pathname.split("/").filter(Boolean).pop();

  const handleGoToRole = () => {
    router.push("/pendataan/master/pengguna/role");
  };
  const handleGoToUser = () => {
    router.push("/pendataan/master/pengguna/user");
  };

  const handleItemsPerPageChange = (e: any) => {
    const newItemsPerPage = e.target.value;
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (isSearching && selectedRole) {
      fetchSearchData(selectedRole.Role, newPage, itemsPerPage);
    } else {
      fetchData(newPage, itemsPerPage);
    }
  };

  const handleOpenModal = () => {
    setModalMode("add");
    setOpenModal(true);
  };

  const handleOpenEditModal = (role: RoleOptions) => {
    setModalMode("edit");
    setSelectedRoleChange(role);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDeleteButton = async (roleid: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/delete/deletaccountrole/${roleid}`);
      toast.success(`berhasil menghapus role!!!`);
    } catch (error) {
      toast.error("error saat menghapus role!!!");
      console.error("Error delete data:", error);
    } finally {
      fetchData();
    }
  };

  const handleAddRole = async (data: RoleOptions) => {
    try {
      const response = await axios.post<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/post/postaccountrole`, {
        Role: data.Role,
        Akses: data.Akses,
      });

      toast.success(response.data.message);
    } catch (error: any) {
      console.error("Gagal tambah role:", error);
      if (error.response && error.response.status === 409) {
        const { message } = error.response.data;
        toast.error(message || "Data tidak ditemukan!");
      } else {
        toast.error("Terjadi kesalahan saat membuat Role!");
      }
      console.error("Error fetching data:", error);
    }
  };

  const handleEditRole = async (data: RoleOptions) => {
    try {
      const getResponse = await axios.get<any>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/get/getaccountrolebyid/${data.id}`);
      const currentData = getResponse.data.data;

      const updatedPayload = {
        ...currentData,
        Role: data.Role,
        akses: data.Akses,
      };

      const putResponse = await axios.put(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/put/editaccountrole/${data.id}`, updatedPayload);

      const updatedRole = putResponse.data;
      console.log("Role berhasil diupdate:", updatedRole);
    } catch (error) {
      console.error("Gagal update role:", error);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <Box width={"fullwidth"} height={"100%"} sx={{ backgroundColor: "#FFF", borderRadius: 2, color: "#000" }}>
        <Box display="flex" alignItems="center" p={2} gap={4}>
          <Button
            variant={currentPath === "role" ? "contained" : "text"}
            sx={{
              bgcolor: currentPath === "role" ? "#FFC107" : "transparent",
              color: "#000",
              "&:hover": {
                bgcolor: currentPath === "role" ? "#E0A800" : "transparent",
              },
            }}
            onClick={handleGoToRole}
          >
            Role
          </Button>
          <Button
            variant={currentPath === "user" ? "contained" : "text"}
            sx={{
              bgcolor: currentPath === "user" ? "#FFC107" : "transparent",
              color: "#000",
              "&:hover": {
                bgcolor: currentPath === "user" ? "#E0A800" : "transparent",
              },
            }}
            onClick={handleGoToUser}
          >
            User
          </Button>
        </Box>

        {/* <Box display={"flex"} justifyContent="center" alignItems="center">
          asd
        </Box> */}

        <Divider />
        <Box flex={1} maxWidth={{ xs: "70%", md: "30%" }} mx={2}>
          <Box sx={{ my: 2 }}>
            <Autocomplete
              options={roles}
              getOptionLabel={(option: any) => option.Role}
              value={selectedRole}
              onChange={(_, newValue) => {
                setSelectedRole(newValue);
                if (newValue) {
                  fetchSearchData(newValue.Role);
                } else {
                  setIsSearching(false);
                  fetchData();
                }
              }}
              loading={loading}
              isOptionEqualToValue={(option, value) => option.id === value?.id}
              clearOnEscape
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Role"
                  color="error"
                  fullWidth
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? <CircularProgress color="error" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFC107",
              color: "#000",
              "&:hover": {
                bgcolor: "#E0A800",
              },
            }}
            startIcon={<AddIcon />}
            onClick={handleOpenModal}
          >
            Role
          </Button>
        </Box>

        <TambahRoleModal open={openModal} mode={modalMode} initialData={selectedRoleChange} onClose={handleCloseModal} onAdd={handleAddRole} onEdit={handleEditRole} />

        <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
          <Box sx={{ width: "70vw" }}>
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                      No
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                      Nama Role
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#023047", fontWeight: "bold" }}>
                      Aksi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data && data.length > 0 ? (
                    data.map((row: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell align="center">{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                        <TableCell align="center">{row.Role}</TableCell>

                        <TableCell align="center">
                          <IconButton sx={{ color: "#219EBC" }} onClick={() => handleOpenEditModal(row)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton sx={{ color: "#FB8500" }} onClick={() => handleDeleteButton(row.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} align="center">
                        Data tidak ditemukan
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" p={2} mt={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2} mt={2}>
              <TablePagination
                component="div"
                count={totalItems}
                page={currentPage - 1}
                onPageChange={(event: any, newPage: number) => handlePageChange(newPage + 1)}
                rowsPerPage={itemsPerPage}
                onRowsPerPageChange={(event: any) => {
                  handleItemsPerPageChange(event);
                  handlePageChange(1);
                }}
                rowsPerPageOptions={[5, 10, 25, 50]}
                labelRowsPerPage="Show:"
                labelDisplayedRows={({ from, to, count }: any) => `${from}-${to} of ${count}`}
                sx={{
                  ".MuiTablePagination-toolbar": {
                    padding: 0,
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  },
                  ".MuiTablePagination-spacer": {
                    display: "none",
                  },
                  ".MuiTablePagination-selectLabel": {
                    margin: 0,
                  },
                  ".MuiTablePagination-displayedRows": {
                    margin: 0,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RolePage;
