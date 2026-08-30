
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  Lock,
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Activity,
  ScanSearch,
} from "lucide-react";

function DoctorLogin() {
  const navigate = useNavigate();

  const [doctorId, setDoctorId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Demo credentials for hackathon prototype
    if (
      doctorId !== "doctor" ||
      password !== "doctor123"
    ) {
      setError("Invalid Doctor ID or password.");
      return;
    }

    localStorage.setItem("doctorLoggedIn", "true");
    navigate("/doctor");
  };

  return (
    <div className="doctor-login-page">

      {/* Background decoration */}
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      {/* ================= NAVBAR ================= */}

      <nav className="doctor-login-navbar">

        <div className="doctor-login-nav-container">

          <div className="doctor-login-logo">

            <div className="doctor-login-logo-icon">
              <Eye size={21} />
            </div>

            <span>
              Netra<span>Scan</span>
            </span>

          </div>

          <div className="doctor-login-security">

            <span className="doctor-login-status-dot"></span>

            SECURE DOCTOR ACCESS

          </div>

        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="doctor-login-main">

        <div className="doctor-login-wrapper">

          {/* ================= LEFT ================= */}

          <section className="doctor-login-intro">

            <span className="doctor-login-label">
              CLINICAL ACCESS
            </span>

            <h1>
              Review smarter.
              <br />
              <span>Care better.</span>
            </h1>

            <p>
              Secure access for authorized doctors to review
              retinal screening results, AI-assisted analysis,
              explainable findings and clinical reports.
            </p>


            {/* Features */}

            <div className="doctor-login-features">

              <div className="doctor-login-feature">

                <div className="doctor-login-feature-icon">
                  <ScanSearch size={19} />
                </div>

                <div>
                  <strong>
                    Screening Results
                  </strong>

                  <span>
                    Review retinal screening results submitted
                    from participating PHCs.
                  </span>
                </div>

              </div>


              <div className="doctor-login-feature">

                <div className="doctor-login-feature-icon">
                  <Activity size={19} />
                </div>

                <div>
                  <strong>
                    AI-Assisted Analysis
                  </strong>

                  <span>
                    Examine AI findings and visual explanations
                    supporting the screening result.
                  </span>
                </div>

              </div>


              <div className="doctor-login-feature">

                <div className="doctor-login-feature-icon">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <strong>
                    Clinical Review
                  </strong>

                  <span>
                    Access patient information and reports for
                    authorized clinical review.
                  </span>
                </div>

              </div>

            </div>

          </section>


          {/* ================= LOGIN CARD ================= */}

          <section className="doctor-login-card">

            <div className="doctor-login-card-top">

              <div className="doctor-login-card-icon">
                <Stethoscope size={24} />
              </div>

              <div>

                <span className="doctor-login-card-label">
                  SECURE DOCTOR ACCESS
                </span>

                <h2>
                  Doctor Login Portal
                </h2>

                <p>
                  Sign in to access the NetraScan clinical
                  review portal.
                </p>

              </div>

            </div>


            {/* ================= FORM ================= */}

            <form
              className="doctor-login-form"
              onSubmit={handleLogin}
            >

              {/* Doctor ID */}

              <div className="doctor-login-field">

                <label htmlFor="doctor-id">
                  Doctor ID
                </label>

                <div className="doctor-login-input-wrapper">

                  <Stethoscope size={18} />

                  <input
                    id="doctor-id"
                    type="text"
                    placeholder="Enter Doctor ID"
                    value={doctorId}
                    onChange={(e) =>
                      setDoctorId(e.target.value)
                    }
                  />

                </div>

              </div>


              {/* Password */}

              <div className="doctor-login-field">

                <label htmlFor="doctor-password">
                  Password
                </label>

                <div className="doctor-login-input-wrapper">

                  <Lock size={18} />

                  <input
                    id="doctor-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />

                </div>

              </div>


              {/* Error */}

              {error && (
                <div className="doctor-login-error">
                  {error}
                </div>
              )}


              {/* Login */}

              <button
                type="submit"
                className="doctor-login-submit-button"
              >
                Continue to Doctor Portal
                <ArrowRight size={18} />
              </button>

            </form>


            {/* Security */}

            <div className="doctor-login-card-footer">

              <ShieldCheck size={15} />

              <span>
                Secure clinical screening environment
              </span>

            </div>


            {/* Back */}

            <button
              type="button"
              className="doctor-back-button"
              onClick={() => navigate("/login")}
            >
              <ArrowLeft size={14} />
              Back to PHC Login
            </button>

          </section>

        </div>

      </main>

    </div>
  );
}

export default DoctorLogin;

