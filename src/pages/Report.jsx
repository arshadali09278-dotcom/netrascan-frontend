
import { Link } from "react-router-dom";
import {
  Eye,
  ArrowLeft,
  Download,
  FileText,
  UserRound,
  Calendar,
  CircleCheck,
  AlertTriangle,
  Activity,
  RotateCcw,
  MapPin,
} from "lucide-react";
import { useScreening } from "../context/ScreeningContext";

function Report() {
  const { patient, preview } = useScreening();

  const patientId = patient?.id || "NS-2026-001";
  const age = patient?.age || "—";
  const gender = patient?.gender || "—";
  const location = patient?.location || "Screening Centre";

  const screeningDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="report-page">

      {/* ================= NAVBAR ================= */}

      <nav className="report-navbar">

        <Link to="/" className="report-logo">

          <div className="report-logo-icon">
            <Eye size={21} />
          </div>

          <span>
            Netra<span>Scan</span>
          </span>

        </Link>

        <div className="report-nav-status">
          <span></span>
          SCREENING REPORT
        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="report-main">

        {/* ================= HEADER ================= */}

        <div className="report-header">

          <div>

            <span className="report-label">
              NETRASCAN SCREENING REPORT
            </span>

            <h1>
              Retinal screening report
            </h1>

            <p>
              AI-assisted retinal screening summary prepared for
              clinical review.
            </p>

          </div>

          <button
            type="button"
            className="report-download-button"
            onClick={handlePrint}
          >
            <Download size={17} />
            Print / Save PDF
          </button>

        </div>


        {/* ================= RESULT STATUS ================= */}

        <section className="report-status-card">

          <div className="report-status-icon">
            <CircleCheck size={30} />
          </div>

          <div className="report-status-content">

            <span>
              SCREENING ASSESSMENT
            </span>

            <h2>
              No significant DR indicators detected
            </h2>

            <p>
              The AI-assisted screening prototype currently
              indicates <strong>Grade 0 — No DR</strong>.
            </p>

          </div>

          <div className="report-confidence">

            <span>
              AI CONFIDENCE
            </span>

            <strong>
              94.2%
            </strong>

            <div className="report-confidence-track">
              <span style={{ width: "94.2%" }}></span>
            </div>

          </div>

        </section>


        {/* ================= PATIENT INFORMATION ================= */}

        <section className="report-card">

          <div className="report-card-header">

            <div className="report-card-icon">
              <UserRound size={19} />
            </div>

            <div>

              <span>
                PATIENT INFORMATION
              </span>

              <h3>
                Screening details
              </h3>

            </div>

          </div>


          <div className="report-details-grid">

            <div>
              <span>Patient ID</span>
              <strong>{patientId}</strong>
            </div>

            <div>
              <span>Age</span>
              <strong>{age}</strong>
            </div>

            <div>
              <span>Gender</span>
              <strong>{gender}</strong>
            </div>

            <div>
              <span>Screening Location</span>
              <strong>
                <MapPin size={15} />
                {location}
              </strong>
            </div>

            <div>
              <span>Screening Date</span>
              <strong>
                <Calendar size={15} />
                {screeningDate}
              </strong>
            </div>

            <div>
              <span>Screening Status</span>
              <strong className="report-success">
                <CircleCheck size={15} />
                Complete
              </strong>
            </div>

          </div>

        </section>


        {/* ================= IMAGE + GRADING ================= */}

        <section className="report-two-column">


          {/* ================= RETINAL IMAGE ================= */}

          <div className="report-card">

            <div className="report-card-header">

              <div className="report-card-icon">
                <Eye size={19} />
              </div>

              <div>

                <span>
                  RETINAL IMAGE
                </span>

                <h3>
                  Analyzed fundus image
                </h3>

              </div>

            </div>


            <div className="report-image-container">

              {preview ? (

                <img
                  src={preview}
                  alt="Uploaded retinal fundus"
                />

              ) : (

                <div className="report-image-placeholder">

                  <Eye size={42} />

                  <span>
                    Retinal image preview unavailable
                  </span>

                  <small>
                    Return to Screening to upload an image.
                  </small>

                </div>

              )}

            </div>


            <div className="report-image-footer">

              <span>
                Image Quality
              </span>

              <strong>
                <CircleCheck size={14} />
                Good
              </strong>

            </div>

          </div>


          {/* ================= DR GRADING ================= */}

          <div className="report-card">

            <div className="report-card-header">

              <div className="report-card-icon">
                <Activity size={19} />
              </div>

              <div>

                <span>
                  DR GRADING
                </span>

                <h3>
                  Screening classification
                </h3>

              </div>

            </div>


            <div className="report-grade-result">

              <div className="report-grade-circle">

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
                  No significant diabetic retinopathy
                  indicators detected.
                </p>

              </div>

            </div>


            <div className="report-grade-scale">

              <div className="active">
                <strong>0</strong>
                <span>No DR</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Mild</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Moderate</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Severe</span>
              </div>

              <div>
                <strong>4</strong>
                <span>PDR</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FINDINGS ================= */}

        <section className="report-card">

          <div className="report-card-header">

            <div className="report-card-icon">
              <FileText size={19} />
            </div>

            <div>

              <span>
                SCREENING FINDINGS
              </span>

              <h3>
                AI-assisted observations
              </h3>

            </div>

          </div>


          <div className="report-findings">

            <div className="finding-row">

              <span>
                Image Quality Assessment
              </span>

              <strong>
                <CircleCheck size={15} />
                Good
              </strong>

            </div>


            <div className="finding-row">

              <span>
                Retinal Structure
              </span>

              <strong>
                <CircleCheck size={15} />
                Analyzed
              </strong>

            </div>


            <div className="finding-row">

              <span>
                Potential Lesions
              </span>

              <strong>
                <CircleCheck size={15} />
                No significant indicators
              </strong>

            </div>


            <div className="finding-row">

              <span>
                DR Classification
              </span>

              <strong>
                Grade 0 — No DR
              </strong>

            </div>


            <div className="finding-row">

              <span>
                AI Confidence
              </span>

              <strong>
                94.2%
              </strong>

            </div>

          </div>

        </section>


        {/* ================= EXPLAINABLE AI ================= */}

        <section className="report-card explainable-report-card">

          <div className="report-card-header">

            <div className="report-card-icon">
              <Activity size={19} />
            </div>

            <div>

              <span>
                EXPLAINABLE AI
              </span>

              <h3>
                Visual decision explanation
              </h3>

            </div>

          </div>


          <div className="explainable-report-content">

            <div className="explanation-item">

              <div className="explanation-number">
                01
              </div>

              <div>

                <strong>
                  Retinal structure
                </strong>

                <p>
                  The screening pipeline evaluates retinal
                  structures and vascular patterns.
                </p>

              </div>

            </div>


            <div className="explanation-item">

              <div className="explanation-number">
                02
              </div>

              <div>

                <strong>
                  Lesion analysis
                </strong>

                <p>
                  Potential abnormal regions are considered
                  during the screening classification.
                </p>

              </div>

            </div>


            <div className="explanation-item">

              <div className="explanation-number">
                03
              </div>

              <div>

                <strong>
                  Final classification
                </strong>

                <p>
                  The prototype currently presents the
                  screening result as Grade 0 — No DR.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= DISCLAIMER ================= */}

        <div className="report-disclaimer">

          <AlertTriangle size={18} />

          <div>

            <strong>
              Clinical review required
            </strong>

            <p>
              NetraScan is an AI-assisted screening prototype.
              This report is not a medical diagnosis and does not
              replace examination by a qualified ophthalmologist.
            </p>

          </div>

        </div>


        {/* ================= ACTIONS ================= */}

        <div className="report-actions">

          <Link
            to="/results"
            className="report-secondary-button"
          >
            <ArrowLeft size={17} />
            Back to Results
          </Link>


          <Link
            to="/screening"
            className="report-primary-button"
          >
            <RotateCcw size={17} />
            New Screening
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Report;
