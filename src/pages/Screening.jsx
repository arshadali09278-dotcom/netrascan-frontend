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

  const handlePatientChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleContinue = () => {
    if (!image) {
      alert("Please upload a retinal fundus image first.");
      return;
    }

    navigate("/analysis");
  };

  return (
    <div className="screening-page">

      {/* ================= NAVBAR ================= */}

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


      {/* ================= MAIN ================= */}

      <main className="screening-main">

        {/* Header */}

        <div className="screening-header">

          <div>
            <span className="section-label">
              NEW SCREENING
            </span>

            <h1>
              Start a retinal screening
            </h1>

            <p>
              Enter basic patient information and upload a retinal fundus
              image to begin the NetraScan screening workflow.
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


        {/* ================= CONTENT ================= */}

        <div className="screening-grid">

          {/* LEFT — PATIENT INFORMATION */}

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

              <div className="form-group">

                <label>
                  Patient ID
                </label>

                <input
                  type="text"
                  name="id"
                  value={patient.id}
                  onChange={handlePatientChange}
                  placeholder="e.g. NS-2026-001"
                />

              </div>


              <div className="form-group">

                <label>
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={patient.age}
                  onChange={handlePatientChange}
                  placeholder="Age"
                  min="1"
                  max="120"
                />

              </div>


              <div className="form-group">

                <label>
                  Gender
                </label>

                <select
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


              <div className="form-group">

                <label>
                  Screening Location
                </label>

                <div className="input-with-icon">

                  <MapPin size={16} />

                  <input
                    type="text"
                    name="location"
                    value={patient.location}
                    onChange={handlePatientChange}
                    placeholder="PHC / Screening Centre"
                  />

                </div>

              </div>

            </div>


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


          {/* RIGHT — IMAGE UPLOAD */}

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


            {!preview ? (

              <label className="upload-area">

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleImageChange}
                  hidden
                />

                <div className="upload-icon">
                  <Upload size={28} />
                </div>

                <h3>
                  Upload retinal image
                </h3>

                <p>
                  Drag & drop or click to browse
                </p>

                <span>
                  PNG, JPG or JPEG • Recommended high-resolution fundus image
                </span>

              </label>

            ) : (

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
                    className="remove-image"
                    onClick={removeImage}
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
                    Image ready for quality assessment
                  </span>

                </div>

              </div>

            )}

          </section>

        </div>


        {/* ================= IMAGE REQUIREMENTS ================= */}

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


        {/* ================= ACTIONS ================= */}

        <div className="screening-actions">

          <Link
            to="/"
            className="cancel-button"
          >
            Cancel
          </Link>

          <button
            className="continue-button"
            onClick={handleContinue}
          >

            Continue to Analysis

            <ArrowRight size={18} />

          </button>

        </div>


        {/* DISCLAIMER */}

        <p className="screening-disclaimer">

          NetraScan is an AI-assisted screening prototype.
          It does not replace professional ophthalmological diagnosis.

        </p>

      </main>

    </div>
  );
}

export default Screening;