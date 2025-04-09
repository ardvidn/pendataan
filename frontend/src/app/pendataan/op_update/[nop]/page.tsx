/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { SPOPForm } from "@/components/SPOPForm";
import LSPOPForm from "@/components/LSPOPForm";
import LocationForm from "@/components/LocationForm";

const DynamicPage = ({ params }: { params: { nop: string } }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Data SPOP", "Data LSPOP", "Lokasi"];
  const [loading, setLoading] = useState(true);
  const [spopData, setSpopData] = useState<any>(null);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    // Fetch existing SPOP data based on NOP
    const fetchSpopData = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch(`/api/spop/${nop}`);
        // const data = await response.json();
        setSpopData({
          noSertifikat: "12345",
          alamat: "Sample address",
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching SPOP data:", error);
        setLoading(false);
      }
    };

    if (params.nop) {
      fetchSpopData();
    }
  }, [params.nop]);

  return (
    <Box width={"fullwidth"} height={"fullheight"} sx={{ backgroundColor: "#FFF", borderRadius: "16px" }} pb={5}>
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
        {activeStep === 0 && <SPOPForm nop={params.nop} setSpopData={setSpopData} spopData={spopData} loading={loading} />}
        {activeStep === 1 && <LSPOPForm nop={params.nop} />}
        {activeStep === 2 && <LocationForm nop={params.nop} />}
      </Box>

      <Box mt={4} display="flex" justifyContent="space-between" px={4}>
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
