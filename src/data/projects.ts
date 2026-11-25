export type Category = "AI/ML" | "Full-Stack" | "Data Science" | "Computer Vision" | "Signal Processing";
export type Project = {
  slug: string; name: string; tagline: string; period: string;
  status: "Completed" | "Ongoing / experimental" | "Prototype";
  categories: Category[]; featured?: boolean;
  problem: string; solution: string; features: string[]; stack: string[];
  architecture: string[]; implementation: string[]; future: string[];
  repo: string; demo?: string; note?: string;
  visual: "nutri" | "crime" | "dtmf" | "face" | "tower" | "sky" | "traffic" | "entity";
};

export const projects: Project[] = [
  {
    slug: "nutriscan-pro", name: "AI-Powered Food Nutrition & Diet Planner — NutriScan Pro", tagline: "Dietary health prediction & personalized nutrition plans", period: "Mar 2026 – Jun 2026",
    status: "Completed", categories: ["AI/ML", "Full-Stack", "Data Science"], featured: true,
    problem: "Early signs of nutrition-related health risks (malnutrition, obesity, diabetes) often go unnoticed, and students in hostels lack tailored guidance for balanced eating.",
    solution: "An AI-powered dietary health prediction system to assess malnutrition, obesity, and diabetes risk using machine learning, featuring personalized nutrition plans, smart food replacement, hostel-menu integration, and progress tracking.",
    features: [
      "Designed an AI-powered dietary health prediction system to assess malnutrition, obesity, and diabetes risk using machine learning",
      "Built personalized nutrition plans tailored to individual dietary metrics and health goals",
      "Smart food-replacement engine providing viable alternatives based on available ingredients",
      "Hostel-menu integration enabling realistic daily dietary planning",
      "Progress tracking and health analytics visualised with Chart.js"
    ],
    stack: ["Flask", "Scikit-learn", "Chart.js", "Python"],
    architecture: ["Dietary & Health Profile Input", "Flask API Services", "Scikit-learn Risk Models", "Personalized Plan & Food-Replacement Engine", "Chart.js Analytics Dashboard"],
    implementation: [
      "Trained classification models on nutritional health risk indicators using scikit-learn.",
      "Engineered replacement algorithms matching macro- and micronutrients with available hostel meals.",
      "Rendered visual health trends and progress charts interactively with Chart.js."
    ],
    future: ["Integrate wearable fitness tracker APIs", "Deploy public web instance with multi-institution mess support", "Expand clinical nutrition validation datasets"],
    repo: "https://github.com/amanjha7783/NutriScan_pro", visual: "nutri",
    note: "Dietary risk predictions are informational models designed for wellness guidance and do not substitute clinical medical diagnoses.",
  },
  {
    slug: "ai-crime-analytics", name: "AI Crime Analytics Platform", tagline: "Datathon 2026 platform modeled on Karnataka State Police workflows", period: "Jun 2026 – Jul 2026",
    status: "Completed", categories: ["AI/ML", "Full-Stack", "Data Science"], featured: true,
    problem: "Law enforcement operations require rapid synthesis of geographic crime patterns, repeat-offender histories, and interconnected criminal networks.",
    solution: "A full-stack crime analytics platform built for Datathon 2026, modeled on Karnataka State Police workflows using synthetic demo data, with ML modules for crime-hotspot prediction, repeat-offender detection, and criminal-network analysis with explainable-AI feature importance.",
    features: [
      "Built a full-stack crime analytics platform for Datathon 2026, modeled on Karnataka State Police workflows using synthetic demo data",
      "Developed ML modules for crime-hotspot prediction and spatial density analysis",
      "Repeat-offender detection algorithms and criminal-network graph analysis",
      "Explainable-AI feature importance providing transparent insight into risk factors",
      "Interactive GIS mapping and analytics dashboards built with Next.js and PostGIS"
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL/PostGIS", "Docker"],
    architecture: ["Synthetic Public-Safety Dataset", "PostgreSQL + PostGIS Spatial Engine", "FastAPI ML Services & Graph Analytics", "Next.js Geospatial Dashboard", "Docker Containerization"],
    implementation: [
      "Handled geospatial radius queries and hotspot indexing using PostGIS spatial functions.",
      "Served machine learning inference and graph connectivity models via FastAPI REST endpoints.",
      "Visualized feature attributions and risk factors alongside geospatial clusters for explainability."
    ],
    future: ["Incorporate temporal forecasting with LSTM/transformer architectures", "Implement role-based authorization controls (RBAC)", "Add automated report generation for precincts"],
    repo: "https://github.com/amanjha7783/ai-crime-analytics-platform", visual: "crime",
    note: "All demonstrations use synthetic data created for Datathon 2026. Contains no real police records and is not affiliated with or deployed by Karnataka State Police.",
  },
  {
    slug: "traffic-analytics-dashboard", name: "Traffic Analytics Dashboard", tagline: "Automated vehicle tracking, travel time forecasting & OSRM routing", period: "Sep 2026 – Nov 2026",
    status: "Completed", categories: ["AI/ML", "Full-Stack", "Computer Vision"], featured: true,
    problem: "Urban transit systems require synchronized video tracking, travel time prediction, and route intelligence to mitigate bottlenecks.",
    solution: "A full stack intelligent traffic dashboard using React, FastAPI, and YOLOv8 for automated vehicle tracking, with predictive machine learning models for travel time forecasting and interactive OSRM road graph routing.",
    features: [
      "Built full stack intelligent traffic dashboard using React, FastAPI, and YOLOv8 for automated vehicle tracking",
      "Implemented predictive machine learning models for travel time forecasting using XGBoost",
      "Interactive OSRM road graph routing with congestion-aware path analysis",
      "Vehicle trajectory tracking, intersection risk heatmaps, and analytics charts with Recharts & Leaflet",
      "ONNX runtime acceleration for low-latency YOLOv8 object detection inference"
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "YOLOv8 (ONNX)", "XGBoost", "Leaflet", "OSRM", "Recharts"],
    architecture: ["Traffic Camera Feeds", "YOLOv8 ONNX Inference", "FastAPI Analytics Server", "XGBoost Travel Time Predictor & OSRM Engine", "React 19 Interactive Dashboard"],
    implementation: [
      "Exported YOLOv8 weights to ONNX format for rapid CPU/GPU inference in Python.",
      "Calculated vehicle trajectories, counting metrics, and risk heatmaps across road sections.",
      "Integrated OSRM routing engine with live speed predictions to suggest optimal routes."
    ],
    future: ["Connect multi-camera edge streams via RTSP", "Add live incident detection alerts (accidents, stalled vehicles)", "Integrate with municipal adaptive signal systems"],
    repo: "https://github.com/amanjha7783/Traffic_Analytics_Dashboard", visual: "traffic",
  },
  {
    slug: "dtmf-signal-lab", name: "Dual-Tone Multi-Frequency (DTMF) Signal Lab", tagline: "Keypad tone generation, WAV export & FFT audio decoding", period: "Feb 2026 – Apr 2026",
    status: "Completed", categories: ["Signal Processing", "Full-Stack"], featured: true,
    problem: "Dual-tone telecommunications signals are abstract and challenging to understand without visual and interactive audio analysis.",
    solution: "A full-stack DTMF signal web app (Flask, SQLite) that generates tones from a keypad interface, exports WAV files, and implements FFT-based DTMF decoding on uploaded audio through a REST API with an oscilloscope-style visualizer and searchable history.",
    features: [
      "Built a full-stack DTMF signal web app (Flask, SQLite) that generates tones from a keypad interface and exports WAV files",
      "Implemented FFT-based DTMF decoding on uploaded audio through a REST API",
      "Oscilloscope-style visualizer showing synthesized waveforms and frequency peaks",
      "Searchable history of decoded audio files and timestamps in SQLite",
      "Clean RESTful API architecture for programmatic tone decoding"
    ],
    stack: ["Python", "Flask", "SQLite", "JavaScript", "Signal Processing (FFT)"],
    architecture: ["Keypad Web Interface", "Tone Synthesis Engine", "WAV Audio Exporter", "REST API Audio Upload", "FFT Spectrogram Decoder & SQLite History"],
    implementation: [
      "Generated dual sine waveforms corresponding to standard ITU telephone frequency pairs.",
      "Applied Fast Fourier Transform (FFT) on audio buffers to detect low and high band frequencies.",
      "Logged decoding sessions and waveform metadata in SQLite for instant query retrieval."
    ],
    future: ["Support noisy channel recovery with bandpass filter pre-processing", "Add Goertzel algorithm decoding option", "Enable microsecond-level frequency zoom in visualizer"],
    repo: "https://github.com/amanjha7783/DTMF-Signal-Lab", visual: "dtmf",
  },
  {
    slug: "face-door-lock", name: "Face Recognition Door Lock System", tagline: "Real-time authorized-user detection & secure access control", period: "Feb 2025 – Apr 2025",
    status: "Completed", categories: ["Computer Vision", "AI/ML"], featured: true,
    problem: "Standard mechanical locks and keypad passcodes lack positive identity verification and are susceptible to theft or shoulder-surfing.",
    solution: "An AI-powered face recognition door lock system using Python, OpenCV, Tkinter, and MySQL for real-time authorized-user detection and secure access control.",
    features: [
      "Developed an AI-powered face recognition door lock system using Python, OpenCV, Tkinter, and MySQL",
      "Real-time authorized-user detection and high-speed facial feature matching",
      "Automated electronic door lock trigger and access grant/deny state machine",
      "User profile management and facial database administration with MySQL",
      "Intuitive desktop operator interface built with Tkinter"
    ],
    stack: ["Python", "OpenCV", "Tkinter", "MySQL"],
    architecture: ["Webcam Video Stream", "OpenCV Haar/Cascade Detection & Feature Extraction", "MySQL Authorized User Store", "Tkinter Desktop Application", "Access Control Logic"],
    implementation: [
      "Captured facial training sets and performed recognition using OpenCV algorithms.",
      "Managed user credentials, enrollments, and access timestamps in MySQL.",
      "Provided an interactive desktop application for system administration and live camera monitoring."
    ],
    future: ["Implement anti-spoofing liveness detection (blink & depth check)", "Add cloud sync for multi-door access control", "Migrate GUI to a modern web-based control panel"],
    repo: "https://github.com/amanjha7783/face_Recognisation_system", visual: "face",
    note: "Developed as an academic applied AI engineering project for access control testing.",
  },
  {
    slug: "towersense", name: "TowerSense Dashboard", tagline: "Network and device diagnostics dashboard", period: "Oct 2024 – Dec 2024",
    status: "Completed", categories: ["Full-Stack"],
    problem: "Checking connection quality, location and device state normally needs several separate tools.",
    solution: "A React and TypeScript dashboard that brings network information, speed testing, location, weather and device diagnostics into one view.",
    features: ["Live location tracking with reverse geocoding", "Interactive map (React-Leaflet)", "Network information via browser APIs", "Internet speed test with network grade", "Weather & environment (Open-Meteo)", "Device diagnostics", "CSV and PDF export", "Dark/light mode"],
    stack: ["React", "TypeScript", "Vite", "React-Leaflet", "jsPDF"],
    architecture: ["Browser APIs (location, network, device)", "Custom hooks per data source", "Dashboard components", "Map, gauge and info cards", "CSV / PDF export"],
    implementation: ["Separate hooks for geolocation, network, speed test, weather and device info.", "Deep cell-tower data is restricted by browsers; the app tells users when so."],
    future: ["Add a real measured speed-test backend", "Add tests and a hosted demo"],
    repo: "https://github.com/amanjha7783/TowerSense_DashBoard", visual: "tower",
    note: "Stack taken from the repository README. The speed test is an estimate from public CDN payloads.",
  },
  {
    slug: "skyguard-ai", name: "SkyGuard AI", tagline: "Weather sensor anomaly detection (SIH26073)", period: "2026",
    status: "Ongoing / experimental", categories: ["AI/ML", "Data Science"],
    problem: "Automatic Weather Stations can report spikes, frozen values or communication errors that corrupt data quality.",
    solution: "An exploration of anomaly detection on temperature, pressure and relative humidity readings, for Smart India Hackathon problem statement SIH26073.",
    features: ["Detect abnormal spikes, frozen sensor values and communication-related errors", "Explore Isolation Forest, autoencoders/LSTM, temporal rules and multivariate checks", "Potential data: IMD AWS and NOAA ISD, with controlled synthetic faults for evaluation"],
    stack: ["Python", "Scikit-learn"],
    architecture: ["AWS readings", "Temporal rule checks", "Isolation Forest / autoencoder / LSTM candidates", "Synthetic fault injection for evaluation"],
    implementation: ["Work in progress; approaches are being compared."],
    future: ["Run evaluation on injected faults", "Report measured detection results"],
    repo: "https://github.com/amanjha7783/SkyGaurad_AI", visual: "sky",
    note: "Experimental. No detection results are claimed and it is not an operational monitoring system.",
  },
  {
    slug: "entity-resolution", name: "Business Entity Resolution", tagline: "Amazon ML Challenge 2026 pipeline", period: "2026",
    status: "Prototype", categories: ["AI/ML", "Data Science"],
    problem: "Matching noisy business records across sources.",
    solution: "A pipeline using TF-IDF and dense-embedding blocking, then a LightGBM/XGBoost ensemble with thresholds tuned on F0.5.",
    features: ["TF-IDF + embedding candidate retrieval", "Pairwise similarity features", "LightGBM/XGBoost ensemble", "Threshold tuning on a held-out split"],
    stack: ["Python", "LightGBM", "XGBoost", "Scikit-learn"],
    architecture: ["Preprocess", "Blocking", "Feature extraction", "Ensemble model", "Threshold & match-cap decision"],
    implementation: ["Dataset is not included in the repository."],
    future: ["Publish evaluation results when available"],
    repo: "https://github.com/amanjha7783/Amazon-ML-challenge-2026", visual: "entity",
    note: "No leaderboard result is claimed.",
  },
];
