
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Eye,
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  X,
  ArrowRight,
  UserRound,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function Screening() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    id: "",
    age: "",
    gender: "",
    location: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  // ============================================
  // PATIENT INFORMATION
  // ============================================

  const handlePatientChange = (e) => {
    const { name, value } = e.target;

    setPatient((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ============================================
  // IMAGE UPLOAD
  // ============================================

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");

    // Supported image formats
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/bmp",
      "image/tiff",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError(
        "Please upload a JPG, JPEG, PNG, WEBP, BMP or TIFF image."
      );

      e.target.value = "";
      return;
    }

    // Maximum 25 MB
    if (file.size > 25 * 1024 * 1024) {
      setError("Image must be smaller than 25 MB.");

      e.target.value = "";
      return;
    }

    // Create browser preview
    const imagePreview = URL.createObjectURL(file);

    setImage(file);
    setPreview(imagePreview);

    // Allow same image to be selected again
    e.target.value = "";
  };

  // ============================================
  // REMOVE IMAGE
  // ============================================

  const removeImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setImage(null);
    setPreview(null);
    setError("");
  };

  // ============================================
  // CONTINUE
  // ============================================

  const handleContinue = () => {
    if (!image) {
      setError("Please upload a retinal fundus image first.");
      return;
    }

    // Store frontend screening data temporarily.
    // No backend is used.
    const screeningData = {
      patient,
      imageName: image.name,
      imageType: image.type,
      imageSize: image.size,
      preview,
      date: new Date().toISOString(),
    };

    sessionStorage.setItem(
      "netrascan_screening",
      JSON.stringify(screeningData)
    );

    navigate("/analysis");
  };

  return (
    <div className="screening-page">

      {/* ============================================
          NAVBAR
      ============================================ */}

      <nav className="screening-navbar">
        <div className="screening-nav-container">

          <Link to="/" className="logo">
            <div className="logo-icon">
              <Eye size={22} />
            </div>

            <span>
              Netra<span className="logo-highlight">Scan</span>
            </span>
          </Link>

          <div className="screening-nav-right">

            <span className="screening-status">
              <span></span>
              Screening Mode
            </span>

            <Link to="/" className="back-home">
              <ArrowLeft size={16} />
              Home
            </Link>

          </div>

        </div>
      </nav>


      {/* ============================================
          MAIN
      ============================================ */}

      <main className="screening-main">

        {/* ============================================
            HEADER
        ============================================ */}

        <div className="screening-header">

          <div>

            <span className="section-label">
              NEW SCREENING
            </span>

            <h1>
              Start a retinal screening
            </h1>

            <p>
              Enter basic patient information and upload a retinal
              fundus image to begin the NetraScan screening workflow.
            </p>

          </div>


          <div className="step-indicator">

            <div className="active-step">
              <span>1</span>
              Patient & Image
            </div>

            <div className="step-line"></div>

            <div>
              <span>2</span>
              Analysis
            </div>

            <div className="step-line"></div>

            <div>
              <span>3</span>
              Results
            </div>

          </div>

        </div>


        {/* ============================================
            CONTENT GRID
        ============================================ */}

        <div className="screening-grid">

          {/* ==========================================
              PATIENT INFORMATION
          ========================================== */}

          <section className="screening-card">

            <div className="card-header">

              <div className="card-icon">
                <UserRound size={20} />
              </div>

              <div>
                <h2>Patient Information</h2>

                <p>
                  Enter basic screening information.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* Patient ID */}

              <div className="form-group">

                <label htmlFor="patient-id">
                  Patient ID
                </label>

                <input
                  id="patient-id"
                  type="text"
                  name="id"
                  value={patient.id}
                  onChange={handlePatientChange}
                  placeholder="e.g. NS-2026-001"
                />

              </div>


              {/* Age */}

              <div className="form-group">

                <label htmlFor="patient-age">
                  Age
                </label>

                <input
                  id="patient-age"
                  type="number"
                  name="age"
                  value={patient.age}
                  onChange={handlePatientChange}
                  placeholder="Age"
                  min="1"
                  max="120"
                />

              </div>


              {/* Gender */}

              <div className="form-group">

                <label htmlFor="patient-gender">
                  Gender
                </label>

                <select
                  id="patient-gender"
                  name="gender"
                  value={patient.gender}
                  onChange={handlePatientChange}
                >

                  <option value="">
                    Select gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* Location */}

              <div className="form-group">

                <label htmlFor="patient-location">
                  Screening Location
                </label>

                <div className="input-with-icon">

                  <MapPin size={16} />

                  <input
                    id="patient-location"
                    type="text"
                    name="location"
                    value={patient.location}
                    onChange={handlePatientChange}
                    placeholder="PHC / Screening Centre"
                  />

                </div>

              </div>

            </div>


            {/* Screening Date */}

            <div className="screening-info-box">

              <Calendar size={18} />

              <div>

                <strong>
                  Screening Date
                </strong>

                <span>
                  {new Date().toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>

              </div>

            </div>

          </section>


          {/* ==========================================
              IMAGE UPLOAD
          ========================================== */}

          <section className="screening-card">

            <div className="card-header">

              <div className="card-icon">
                <ImageIcon size={20} />
              </div>

              <div>
                <h2>Retinal Fundus Image</h2>

                <p>
                  Upload a clear retinal image for screening.
                </p>
              </div>

            </div>


            {/* ERROR */}

            {error && (
              <div
                role="alert"
                style={{
                  marginBottom: "14px",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "#fff1f1",
                  color: "#b42318",
                  fontSize: "14px",
                  border: "1px solid #f3c2c2",
                }}
              >
                {error}
              </div>
            )}


            {/* ========================================
                UPLOAD AREA
            ======================================== */}

            {!preview ? (

              <label
                htmlFor="retinal-image-upload"
                className="upload-area"
              >

                <input
                  id="retinal-image-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp,.bmp,.tif,.tiff,image/jpeg,image/png,image/webp,image/bmp,image/tiff"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />

                <div className="upload-icon">
                  <Upload size={28} />
                </div>

                <h3>
                  Upload retinal image
                </h3>

                <p>
                  Click to browse and select an image
                </p>

                <span>
                  JPG, JPEG, PNG, WEBP, BMP or TIFF • Maximum 25 MB
                </span>

              </label>

            ) : (

              /* ======================================
                  IMAGE PREVIEW
              ====================================== */

              <div className="image-preview-container">

                <div className="preview-header">

                  <div>

                    <span className="preview-label">
                      IMAGE PREVIEW
                    </span>

                    <strong>
                      {image?.name}
                    </strong>

                  </div>


                  <button
                    type="button"
                    className="remove-image"
                    onClick={removeImage}
                    aria-label="Remove uploaded image"
                  >
                    <X size={17} />
                  </button>

                </div>


                <div className="retinal-preview">

                  <img
                    src={preview}
                    alt="Uploaded retinal fundus"
                  />

                </div>


                <div className="image-ready">

                  <CheckCircle2 size={17} />

                  <span>
                    Image ready for frontend analysis
                  </span>

                </div>

              </div>

            )}

          </section>

        </div>


        {/* ============================================
            IMAGE REQUIREMENTS
        ============================================ */}

        <section className="requirements-card">

          <div>

            <span className="requirements-title">
              IMAGE REQUIREMENTS
            </span>

            <h3>
              For better screening quality
            </h3>

          </div>


          <div className="requirements-list">

            <div>
              <CheckCircle2 size={16} />
              Clear retinal view
            </div>

            <div>
              <CheckCircle2 size={16} />
              Adequate illumination
            </div>

            <div>
              <CheckCircle2 size={16} />
              Minimal blur
            </div>

            <div>
              <CheckCircle2 size={16} />
              Retina centered
            </div>

          </div>

        </section>


        {/* ============================================
            ACTIONS
        ============================================ */}

        <div className="screening-actions">

          <Link
            to="/"
            className="cancel-button"
          >
            Cancel
          </Link>


          <button
            type="button"
            className="continue-button"
            onClick={handleContinue}
          >

            Continue to Analysis

            <ArrowRight size={18} />

          </button>

        </div>


        {/* ============================================
            DISCLAIMER
        ============================================ */}

        <p className="screening-disclaimer">

          NetraScan is an AI-assisted screening prototype.
          It does not replace professional ophthalmological diagnosis.

        </p>

      </main>

    </div>
  );
}

export default Screening;

