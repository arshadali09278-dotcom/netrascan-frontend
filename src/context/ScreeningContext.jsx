import { createContext, useContext, useState } from "react";

const ScreeningContext = createContext(null);

export function ScreeningProvider({ children }) {
  const [patient, setPatient] = useState({
    id: "",
    age: "",
    gender: "",
    location: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  // ================= PHC LOGIN =================

  const [phc, setPhc] = useState(() => {
    const savedPhc = localStorage.getItem("netrascan_phc");

    return savedPhc
      ? JSON.parse(savedPhc)
      : null;
  });

  const loginPhc = (phcData) => {
    setPhc(phcData);
    localStorage.setItem("netrascan_phc", JSON.stringify(phcData));
  };

  const logoutPhc = () => {
    setPhc(null);
    localStorage.removeItem("netrascan_phc");
  };

  // ================= SCREENING =================

  const startNewScreening = () => {
    setPatient({
      id: "",
      age: "",
      gender: "",
      location: "",
    });

    setImage(null);
    setPreview(null);
    setAnalysisResult(null);
  };

  const saveImage = (file) => {
    if (!file) return;

    setImage(file);

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const clearImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setImage(null);
    setPreview(null);
  };

  const value = {
    patient,
    setPatient,

    image,
    preview,
    saveImage,
    clearImage,

    analysisResult,
    setAnalysisResult,

    startNewScreening,

    // PHC
    phc,
    loginPhc,
    logoutPhc,
  };

  return (
    <ScreeningContext.Provider value={value}>
      {children}
    </ScreeningContext.Provider>
  );
}

export function useScreening() {
  const context = useContext(ScreeningContext);

  if (!context) {
    throw new Error(
      "useScreening must be used inside ScreeningProvider"
    );
  }

  return context;
}