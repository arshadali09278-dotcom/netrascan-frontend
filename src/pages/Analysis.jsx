import { useEffect, useState } from "react";
import {
  Eye,
  ScanSearch,
  Sparkles,
  Activity,
  Brain,
  CircleCheck,
  LoaderCircle,
} from "lucide-react";

function Analysis() {
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      icon: ScanSearch,
      title: "Image Quality Assessment",
      description: "Checking brightness, contrast and image clarity.",
    },
    {
      icon: Sparkles,
      title: "Image Enhancement",
      description: "Improving retinal visibility and contrast.",
    },
    {
      icon: Eye,
      title: "Retinal Structure Analysis",
      description: "Analyzing optic disc, fovea and blood vessels.",
    },
    {
      icon: Activity,
      title: "Lesion Detection",
      description: "Scanning for potential retinal abnormalities.",
    },
    {
      icon: Brain,
      title: "Explainable AI",
      description: "Preparing visual explanation regions.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(timer);
          return 100;
        }

        return previous + 1;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  /*
    Progress mapping:

    0–19   → Step 1 active
    20–39  → Step 2 active
    40–59  → Step 3 active
    60–79  → Step 4 active
    80–99  → Step 5 active
    100    → All steps completed
  */

  const currentStep =
    progress >= 100
      ? steps.length
      : Math.floor(progress / 20);

  return (
    <div className="analysis-page">

      {/* ================= NAVBAR ================= */}

      <nav className="analysis-navbar">

        <div className="analysis-logo">

          <div className="analysis-logo-icon">
            <Eye size={22} />
          </div>

          <span>
            Netra<span>Scan</span>
          </span>

        </div>

        <div className="analysis-status">
          <span className="status-dot"></span>
          AI ANALYSIS ACTIVE
        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="analysis-main">

        {/* ================= HEADER ================= */}

        <div className="analysis-header">

          <span className="analysis-label">
            NETRASCAN AI ENGINE
          </span>

          <h1>
            {progress >= 100
              ? "Analysis complete"
              : "Analyzing retinal image"}

            {progress < 100 && (
              <span className="loading-dots">...</span>
            )}
          </h1>

          <p>
            {progress >= 100
              ? "The retinal image has completed the AI-assisted screening pipeline."
              : "Our AI-assisted screening pipeline is examining the retinal image for potential diabetic retinopathy indicators."}
          </p>

        </div>


        {/* ================= RETINA VISUAL ================= */}

        <div className="analysis-visual">

          <div className="retina-ring ring-one"></div>
          <div className="retina-ring ring-two"></div>

          <div className="analysis-retina">

            <div className="retina-core"></div>

            <div className="retina-vessel vessel-one"></div>
            <div className="retina-vessel vessel-two"></div>
            <div className="retina-vessel vessel-three"></div>
            <div className="retina-vessel vessel-four"></div>
            <div className="retina-vessel vessel-five"></div>

            <div className="retina-scan-line"></div>

            <span className="retina-point point-one"></span>
            <span className="retina-point point-two"></span>
            <span className="retina-point point-three"></span>

          </div>

          <div className="scan-badge">

            {progress >= 100 ? (
              <>
                <CircleCheck size={16} />
                ANALYSIS COMPLETE
              </>
            ) : (
              <>
                <ScanSearch size={16} />
                RETINAL SCAN
              </>
            )}

          </div>

        </div>


        {/* ================= PROGRESS ================= */}

        <div className="analysis-progress">

          <div className="progress-header">

            <span>Analysis Progress</span>

            <strong>{progress}%</strong>

          </div>

          <div className="progress-track">

            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

        </div>


        {/* ================= ANALYSIS STEPS ================= */}

        <div className="analysis-steps">

          {steps.map((step, index) => {

            const Icon = step.icon;

            const completed = index < currentStep;

            const active =
              index === currentStep &&
              progress < 100;

            return (
              <div
                className={`analysis-step ${
                  active ? "active" : ""
                } ${completed ? "completed" : ""}`}
                key={step.title}
              >

                {/* ICON */}

                <div className="analysis-step-icon">

                  {completed ? (
                    <CircleCheck size={20} />
                  ) : active ? (
                    <LoaderCircle
                      size={20}
                      className="spin"
                    />
                  ) : (
                    <Icon size={20} />
                  )}

                </div>


                {/* CONTENT */}

                <div className="analysis-step-content">

                  <strong>
                    {step.title}
                  </strong>

                  <span>
                    {step.description}
                  </span>

                </div>


                {/* NUMBER */}

                <div className="analysis-step-number">

                  {String(index + 1).padStart(2, "0")}

                </div>

              </div>
            );

          })}

        </div>


        {/* ================= DISCLAIMER ================= */}

        <div className="analysis-disclaimer">

          <ShieldIcon />

          <span>
            AI-assisted screening prototype •
            Results require professional clinical review.
          </span>

        </div>

      </main>

    </div>
  );
}


/* ================= SHIELD ================= */

function ShieldIcon() {
  return (
    <div className="shield-icon">
      ✓
    </div>
  );
}

export default Analysis;