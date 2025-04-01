import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Stepper, Step, StepLabel, Button, Container } from "@mui/material";
import SpopForm from "@/components/forms/SpopForm";
import LspopForm from "@/components/forms/LspopForm";
import LocationForm from "@/components/forms/LocationForm";

const steps = ["Data SPOP", "Data LSPOP", "Lokasi"];

export default function UpdateNOP() {
  const router = useRouter();
  const { nop } = router.query;
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (nop) {
      fetch(`/api/getData?nop=${nop}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [nop]);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ marginTop: 20 }}>
        {activeStep === 0 && <SpopForm data={formData} setData={setFormData} />}
        {activeStep === 1 && <LspopForm data={formData} setData={setFormData} />}
        {activeStep === 2 && <LocationForm data={formData} setData={setFormData} />}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
          Kembali
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === steps.length - 1}>
          {activeStep === steps.length - 1 ? "Selesai" : "Lanjut"}
        </Button>
      </div>
    </Container>
  );
}
