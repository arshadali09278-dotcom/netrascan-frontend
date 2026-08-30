import { useNavigate } from "react-router-dom";
import {
  Eye,
  LayoutDashboard,
  Users,
  Search,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  LogOut,
  ScanSearch,
} from "lucide-react";

function DoctorPortal() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("doctorLoggedIn");
    navigate("/doctor/login");
  };

  const stats = [
    {
      label: "Total Patients",
      value: "128",
      icon: Users,
    },
    {
      label: "Screened Today",
      value: "24",
      icon: ScanSearch,
    },
    {
      label: "Refer for Review",
      value: "7",
      icon: AlertTriangle,
    },
    {
      label: "Normal / Low Risk",
      value: "17",
      icon: CheckCircle,
    },
  ];

  const recentPatients = [
    {
      id: "NS-1001",
      name: "Rajesh Kumar",
      age: 56,
      date: "30 Aug 2026",
      result: "Moderate Risk",
      status: "review",
    },
    {
      id: "NS-1002",
      name: "Sunita Devi",
      age: 49,
      date: "30 Aug 2026",
      result: "No DR Detected",
      status: "normal",
    },
    {
      id: "NS-1003",
      name: "Mohammed Irfan",
      age: 61,
      date: "30 Aug 2026",
      result: "Mild Risk",
      status: "mild",
    },
    {
      id: "NS-1004",
      name: "Priya Sharma",
      age: 58,
      date: "29 Aug 2026",
      result: "Severe Risk",
      status: "review",
    },
  ];

  return (
    <div className="doctor-portal">

      {/* ================= SIDEBAR ================= */}

      <aside className="doctor-sidebar">

        <div className="doctor-brand">
          <div className="doctor-brand-icon">
            <Eye size={22} />
          </div>

          <div>
            <strong>
              Netra<span>Scan</span>
            </strong>

            <small>
              Doctor Portal
            </small>
          </div>
        </div>

        <nav className="doctor-nav">

          <button
            className="doctor-nav-item active"
            onClick={() => navigate("/doctor")}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button
            className="doctor-nav-item"
            onClick={() => navigate("/doctor/patients")}
          >
            <Users size={18} />
            Patients
          </button>

          <button
            className="doctor-nav-item"
            onClick={() => navigate("/doctor/analysis")}
          >
            <Activity size={18} />
            AI Analysis
          </button>

        </nav>

        <div className="doctor-sidebar-bottom">

          <div className="doctor-secure">
            <CheckCircle size={15} />
            <span>
              Secure session
            </span>
          </div>

          <button
            className="doctor-logout"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="doctor-main">

        {/* Header */}

        <header className="doctor-header">

          <div>
            <span className="doctor-header-label">
              CLINICAL DASHBOARD
            </span>

            <h1>
              Good evening, Doctor
            </h1>

            <p>
              Review screening activity and patient risk information.
            </p>
          </div>

          <div className="doctor-profile">

            <div className="doctor-avatar">
              DR
            </div>

            <div>
              <strong>
                Dr. Sharma
              </strong>

              <span>
                Ophthalmology
              </span>
            </div>

          </div>

        </header>


        {/* ================= STAT CARDS ================= */}

        <section className="doctor-stats">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (
              <div
                className="doctor-stat-card"
                key={stat.label}
              >

                <div className="doctor-stat-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <span>
                    {stat.label}
                  </span>

                  <strong>
                    {stat.value}
                  </strong>
                </div>

              </div>
            );

          })}

        </section>


        {/* ================= CONTENT GRID ================= */}

        <section className="doctor-content-grid">

          {/* Recent screenings */}

          <div className="doctor-panel doctor-recent">

            <div className="doctor-panel-header">

              <div>
                <h2>
                  Recent Screenings
                </h2>

                <p>
                  Latest AI-assisted retinal screening results
                </p>
              </div>

              <button
                onClick={() => navigate("/doctor/patients")}
              >
                View all
                <ArrowRight size={16} />
              </button>

            </div>


            <div className="doctor-table">

              <div className="doctor-table-head">
                <span>Patient</span>
                <span>Date</span>
                <span>AI Result</span>
                <span></span>
              </div>

              {recentPatients.map((patient) => (

                <div
                  className="doctor-table-row"
                  key={patient.id}
                >

                  <div className="doctor-patient-cell">

                    <div className="doctor-patient-avatar">
                      {patient.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <strong>
                        {patient.name}
                      </strong>

                      <span>
                        {patient.id} · {patient.age} yrs
                      </span>
                    </div>

                  </div>

                  <span className="doctor-date">
                    {patient.date}
                  </span>

                  <span
                    className={`doctor-result ${patient.status}`}
                  >
                    {patient.result}
                  </span>

                  <button
                    className="doctor-row-action"
                    onClick={() =>
                      navigate(
                        `/doctor/patients/${patient.id}`
                      )
                    }
                  >
                    <ArrowRight size={17} />
                  </button>

                </div>

              ))}

            </div>

          </div>


          {/* Quick actions */}

          <div className="doctor-panel doctor-actions">

            <div className="doctor-panel-header">

              <div>
                <h2>
                  Quick Actions
                </h2>

                <p>
                  Common clinical workflows
                </p>
              </div>

            </div>


            <button
              className="doctor-action-card"
              onClick={() => navigate("/doctor/patients")}
            >

              <div className="doctor-action-icon">
                <Users size={20} />
              </div>

              <div>
                <strong>
                  Patient Records
                </strong>

                <span>
                  Search and review patient screening history
                </span>
              </div>

              <ArrowRight size={17} />

            </button>


            <button
              className="doctor-action-card"
              onClick={() => navigate("/doctor/analysis")}
            >

              <div className="doctor-action-icon">
                <ScanSearch size={20} />
              </div>

              <div>
                <strong>
                  AI Analysis
                </strong>

                <span>
                  Review retinal images and AI explanations
                </span>
              </div>

              <ArrowRight size={17} />

            </button>


            <div className="doctor-info-card">

              <Clock size={18} />

              <div>
                <strong>
                  Today's screening activity
                </strong>

                <span>
                  24 patients screened · 7 require review
                </span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default DoctorPortal;