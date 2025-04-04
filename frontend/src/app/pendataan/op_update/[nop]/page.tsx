"use client";
import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { SPOPForm } from "@/components/SPOPForm";

const DynamicPage = ({ params }: { params: { nop: string } }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Data SPOP", "Data LSPOP", "Lokasi"];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box width={"fullwidth"} height={"95vh"} sx={{ backgroundColor: "#FFF", borderRadius: "16px" }}>
      <Box pt={4}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box mt={3}>
        {activeStep === 0 && <SPOPForm nop={params.nop} />}
        {activeStep === 1 && <LSPOPForm nop={params.nop} />}
        {activeStep === 2 && <LocationForm nop={params.nop} />}
      </Box>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={handleBack} sx={{ color: "red" }}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={activeStep === steps.length - 1}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default DynamicPage;
