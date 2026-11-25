export const experiences = [
  {
    id: "cris",
    role: "Machine Learning Intern",
    org: "Centre for Railway Information Systems (CRIS)",
    sub: "Ministry of Railways, Govt. of India",
    period: "May 2026 – Jun 2026",
    context: "SFOORTI — Smart Freight Operation Optimisation & Real Time Information",
    points: [
      "Built an end-to-end ML pipeline (EDA, feature engineering, modeling, deployment) for CRIS's SFOORTI freight rake turnaround-time prediction system, analyzing 1,427 operational records and benchmarking multiple algorithms.",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "LightGBM", "SHAP", "EDA"],
    metrics: [
      { label: "Operational Dataset", value: "1,427 Records Analyzed" },
      { label: "Top-Performing Model", value: "LightGBM Regressor" },
      { label: "Feature Explainability", value: "SHAP Value Analysis" },
      { label: "Key Predictive Driver", value: "Station Turnaround Averages" },
    ],
    workflow: [
      { step: "EDA & Target Definition", text: "Explored 1,427 operational records from SFOORTI freight movements and turnaround metrics." },
      { step: "Data Preparation", text: "Validated operational logs, handled missing data, and encoded railway terminal metadata." },
      { step: "Feature Engineering", text: "Engineered critical temporal metrics and station-level historical turnaround averages." },
      { step: "Model Benchmarking", text: "Trained and evaluated multiple regression algorithms under rigorous cross-validation." },
      { step: "Evaluation & Selection", text: "Selected LightGBM as the optimal performing model for operational accuracy." },
      { step: "SHAP Explainability", text: "Generated SHAP attributions to identify primary factors driving rake turnaround times." },
      { step: "Pipeline Packaging", text: "Packaged the full pipeline for automated freight turnaround forecasting." },
    ],
  },
  {
    id: "drm",
    role: "Intern",
    org: "Divisional Railway Manager's Office (DRM), Delhi",
    sub: "Indian Railways",
    period: "May 2025 – Jun 2025",
    context: "Passenger Information Systems & Automation",
    points: [
      "Automated railway display board and public announcement systems, improving real-time passenger information delivery.",
    ],
    tech: ["Python", "Automation", "Hardware Integration", "Passenger Protocols"],
    metrics: [
      { label: "Focus Domain", value: "Passenger Information Systems" },
      { label: "Deliverables", value: "Automated Display & Audio Announcements" },
      { label: "Operational Impact", value: "Real-time Passenger Information Delivery" },
    ],
    workflow: [
      { step: "Protocol Analysis", text: "Audited existing passenger announcement formats and digital display board specifications." },
      { step: "Automation Logic", text: "Engineered Python automation scripts to parse live train movements and dispatch status feeds." },
      { step: "Audio-Visual Sync", text: "Synchronized digital platform display boards with automated bilingual audio announcements." },
      { step: "Field Testing", text: "Validated broadcast reliability and real-time responsiveness at station terminals." },
    ],
  },
];
