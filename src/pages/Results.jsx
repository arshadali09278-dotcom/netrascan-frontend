import { Link, useNavigate } from "react-router-dom";
import { useScreening } from "../context/ScreeningContext";

import {
  Eye,
  ArrowLeft,
  Download,
  CircleCheck,
  AlertTriangle,
  Activity,
  FileText,
  RotateCcw,
  Image as ImageIcon,
} from "lucide-react";

function Results() {
  const navigate = useNavigate();

  const {
    patient,
    image,
    preview,
    startNewScreening,
  } = useScreening();

  const handleNewScreening = () => {
    startNewScreening();
    navigate("/screening");
  };

  return (
    <div className="results-page">

      {/* ================= NAVBAR ================= */}

      <nav className="results-navbar">

        <Link to="/" className="results-logo">

          <div className="results-logo-icon">
            <Eye size={21} />
          </div>

          <span>
            Netra<span>Scan</span>
          </span>

        </Link>

        <div className="results-nav-status">
          <span className="results-status-dot"></span>
          SCREENING COMPLETE
        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="results-main">

        {/* ================= HEADER ================= */}

        <div className="results-header">

          <div>

            <span className="results-label">
              SCREENING RESULT
            </span>

            <h1>
              Retinal analysis complete
            </h1>

            <p>
              AI-assisted analysis of the uploaded retinal fundus image.
            </p>

          </div>

          <Link to="/report" className="report-button">
            <Download size={17} />
            Generate Report
          </Link>

        </div>


        {/* ================= PATIENT INFO ================= */}

        <section className="result-patient-info">

          <div>
            <span>Patient ID</span>
            <strong>{patient?.id || "NS-2026-001"}</strong>
          </div>

          <div>
            <span>Age</span>
            <strong>{patient?.age || "—"}</strong>
          </div>

          <div>
            <span>Gender</span>
            <strong>{patient?.gender || "—"}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{patient?.location || "Screening Centre"}</strong>
          </div>

        </section>


        {/* ================= RESULT SUMMARY ================= */}

        <section className="result-summary">

          <div className="result-status-icon">
            <CircleCheck size={34} />
          </div>

          <div className="result-summary-content">

            <span className="result-summary-label">
              SCREENING ASSESSMENT
            </span>

            <h2>
              No significant DR indicators detected
            </h2>

            <p>
              The frontend demonstration indicates no significant
              diabetic retinopathy indicators in the analyzed image.
            </p>

          </div>

          <div className="result-confidence">

            <span>
              AI CONFIDENCE
            </span>

            <strong>
              94.2%
            </strong>

            <div className="confidence-track">

              <div
                className="confidence-fill"
                style={{ width: "94.2%" }}
              />

            </div>

          </div>

        </section>


        {/* ================= MAIN GRID ================= */}

        <section className="results-grid">


          {/* ================= REAL UPLOADED IMAGE ================= */}

          <div className="results-card retina-result-card">

            <div className="card-header">

              <div>

                <span className="card-label">
                  RETINAL IMAGE
                </span>

                <h3>
                  Analyzed fundus image
                </h3>

              </div>

              <span className="image-quality-badge">

                <CircleCheck size={14} />

                Good Quality

              </span>

            </div>


            <div className="result-retina real-retina-image">

              {preview ? (

                <img
                  src={preview}
                  alt="Uploaded retinal fundus"
                />

              ) : (

                <div className="no-result-image">

                  <ImageIcon size={36} />

                  <span>
                    No retinal image available
                  </span>

                </div>

              )}

            </div>


            <div className="retina-caption">

              <span>
                {image?.name || "Retinal fundus image"}
              </span>

              <span>
                Analysis complete
              </span>

            </div>

          </div>


          {/* ================= DR GRADING ================= */}

          <div className="results-card grading-card">

            <div className="card-header">

              <div>

                <span className="card-label">
                  DR GRADING
                </span>

                <h3>
                  Screening classification
                </h3>

              </div>

              <Activity size={20} />

            </div>


            <div className="grading-result">

              <div className="grading-circle">

                <strong>
                  0
                </strong>

                <span>
                  Grade
                </span>

              </div>

              <div>

                <h4>
                  No DR
                </h4>

                <p>
                  No significant diabetic retinopathy indicators
                  detected.
                </p>

              </div>

            </div>


            <div className="grading-scale">

              <div className="grade active">
                <span>0</span>
                <small>No DR</small>
              </div>

              <div className="grade">
                <span>1</span>
                <small>Mild</small>
              </div>

              <div className="grade">
                <span>2</span>
                <small>Moderate</small>
              </div>

              <div className="grade">
                <span>3</span>
                <small>Severe</small>
              </div>

              <div className="grade">
                <span>4</span>
                <small>PDR</small>
              </div>

            </div>

          </div>

        </section>


        {/* ================= EXPLAINABLE AI ================= */}

        <section className="results-card explainable-result-section">

          <div className="card-header">

            <div>

              <span className="card-label">
                EXPLAINABLE AI
              </span>

              <h3>
                Why did the AI make this decision?
              </h3>

            </div>

          </div>

          <div className="explainable-placeholder">

            <div className="explainable-placeholder-icon">
              <Eye size={28} />
            </div>

            <div>

              <h4>
                Visual explanation
              </h4>

              <p>
                Highlighted retinal regions will appear here
                in the full AI implementation.
              </p>

            </div>

          </div>

        </section>


        {/* ================= CLINICAL SUMMARY ================= */}

        <section className="clinical-summary">

          <div className="clinical-summary-header">

            <div className="clinical-summary-icon">
              <FileText size={21} />
            </div>

            <div>

              <span className="card-label">
                SCREENING SUMMARY
              </span>

              <h3>
                Clinical review summary
              </h3>

            </div>

          </div>


          <div className="summary-items">

            <div>
              <span>
                Image Quality
              </span>

              <strong>
                Good
              </strong>
            </div>

            <div>
              <span>
                DR Grade
              </span>

              <strong>
                0 — No DR
              </strong>
            </div>

            <div>
              <span>
                AI Confidence
              </span>

              <strong>
                94.2%
              </strong>
            </div>

            <div>
              <span>
                Analysis Status
              </span>

              <strong className="summary-success">
                Complete
              </strong>
            </div>

          </div>

        </section>


        {/* ================= DISCLAIMER ================= */}

        <div className="results-disclaimer">

          <AlertTriangle size={17} />

          <span>
            NetraScan is an AI-assisted screening prototype and does
            not replace professional ophthalmological diagnosis.
            Results should be reviewed by a qualified healthcare
            professional.
          </span>

        </div>


        {/* ================= ACTIONS ================= */}

        <div className="results-actions">

          <button
            type="button"
            className="secondary-result-button"
            onClick={handleNewScreening}
          >
            <RotateCcw size={17} />
            New Screening
          </button>


          <Link
            to="/report"
            className="primary-result-button"
          >
            <FileText size={17} />
            View Full Report
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Results;