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

const startNewScreening = () => {
setPatient({
id: "",
age: "",
gender: "",
location: "",
});

```
setImage(null);
setPreview(null);
setAnalysisResult(null);
```

};

const saveImage = (file) => {
if (!file) return;

```
setImage(file);

const imageUrl = URL.createObjectURL(file);
setPreview(imageUrl);
```

};

const clearImage = () => {
if (preview) {
URL.revokeObjectURL(preview);
}

```
setImage(null);
setPreview(null);
```

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
