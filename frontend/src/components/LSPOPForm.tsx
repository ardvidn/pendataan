"use client";
import { useState, useEffect } from "react";
import { Grid2, TextField, Autocomplete, Button, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { BuildingModal } from "./BuildingModal";

export const LSPOPForm = ({ nop }: { nop: string }) => {
  const [buildings, setBuildings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [editingBuilding, setEditingBuilding] = useState<any>(null);

  // Mock data for autocomplete options
  const jenisBangunanOptions = ["Rumah Tinggal", "Ruko", "Kantor", "Gudang"];
  const kondisiBangunanOptions = ["Baik", "Sedang", "Rusak"];
  const konstruksiBangunanOptions = ["Beton", "Kayu", "Semi Beton"];
  const atapBangunanOptions = ["Genteng", "Asbes", "Seng"];
  const dindingBangunanOptions = ["Tembok", "Kayu", "Bambu"];
  const lantaiBangunanOptions = ["Keramik", "Tegel", "Semen"];
  const langitLangitBangunanOptions = ["Papan", "Triplek", "Gypsum"];

  useEffect(() => {
    // Fetch existing building data based on NOP
    const fetchBuildingData = async () => {
      try {
        // Replace with actual API call
        const response = await fetch(`/api/buildings/${nop}`);
        const data = await response.json();
        setBuildings(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching building data:", error);
        setLoading(false);
      }
    };

    if (nop) {
      fetchBuildingData();
    }
  }, [nop]);

  const handleAddBuilding = () => {
    setEditingBuilding(null);
    setOpenModal(true);
  };

  const handleEditBuilding = (building: any) => {
    setEditingBuilding(building);
    setOpenModal(true);
  };

  const handleSaveBuilding = (buildingData: any) => {
    if (editingBuilding) {
      // Update existing building
      setBuildings(buildings.map((b) => (b.id === editingBuilding.id ? { ...buildingData, id: editingBuilding.id } : b)));
    } else {
      // Add new building
      setBuildings([...buildings, { ...buildingData, id: Date.now() }]);
    }
    setOpenModal(false);
  };

  const handleDeleteBuilding = (id: number) => {
    setBuildings(buildings.filter((b) => b.id !== id));
  };

  if (loading) {
    return <Typography>Loading building data...</Typography>;
  }

  return (
    <Grid2 container spacing={3} sx={{ mt: 2 }}>
      <Grid2 item xs={12}>
        <Typography variant="h6" gutterBottom>
          Rincian Data Bangunan
        </Typography>
        <Divider />
      </Grid2>

      {buildings.length > 0 ? (
        <>
          <Grid2 item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Jenis Bangunan</TableCell>
                    <TableCell>Luas Bangunan</TableCell>
                    <TableCell>Jumlah Lantai</TableCell>
                    <TableCell>Tahun Dibangun</TableCell>
                    <TableCell>Kondisi</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {buildings.map((building) => (
                    <TableRow key={building.id}>
                      <TableCell>{building.jenisBangunan}</TableCell>
                      <TableCell>{building.luasBangunan} m²</TableCell>
                      <TableCell>{building.jumlahLantai}</TableCell>
                      <TableCell>{building.tahunDibangun}</TableCell>
                      <TableCell>{building.kondisiBangunan}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleEditBuilding(building)}>Edit</Button>
                        <Button color="error" onClick={() => handleDeleteBuilding(building.id)}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>
          <Grid2 item xs={12}>
            <Button variant="contained" startIcon={<AddCircleIcon />} onClick={handleAddBuilding}>
              Tambah Objek Bangunan
            </Button>
          </Grid2>
        </>
      ) : (
        <Grid2 item xs={12}>
          <Typography variant="body1" gutterBottom>
            Tidak ada data bangunan untuk NOP ini.
          </Typography>
          <Button variant="contained" startIcon={<AddCircleIcon />} onClick={handleAddBuilding}>
            Tambah Objek Bangunan
          </Button>
        </Grid2>
      )}

      <BuildingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSaveBuilding}
        building={editingBuilding}
        jenisBangunanOptions={jenisBangunanOptions}
        kondisiBangunanOptions={kondisiBangunanOptions}
        konstruksiBangunanOptions={konstruksiBangunanOptions}
        atapBangunanOptions={atapBangunanOptions}
        dindingBangunanOptions={dindingBangunanOptions}
        lantaiBangunanOptions={lantaiBangunanOptions}
        langitLangitBangunanOptions={langitLangitBangunanOptions}
      />
    </Grid2>
  );
};
