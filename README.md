<h1 align="center">Weather Forecast System</h1>
<h3 align="center">Real-Time Climate Analytics & Synchronized Time-Data Engine</h3>

<p align="center">
  A production-ready climate monitoring platform designed for real-time data aggregation. This system integrates disparate RESTful API services to provide high-fidelity weather metrics and location-based time synchronization, engineered for low-latency retrieval and efficient state-driven UI updates.
</p>

<p align="center">
  <a href="https://weather-app-citycast.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Demo-View_Project-success?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License" />
  </a>
</p>

---

### ✨ Core Features

* **Multi-Source Data Orchestration:** Sophisticated integration pipeline aggregating data from OpenWeatherMap (Climate Dynamics) and TimezoneDB (Temporal Synchronization) to deliver comprehensive, unified global reports.
* **High-Fidelity Analytics:** Real-time processing and UI mapping of nuanced climatic telemetry, including atmospheric pressure gradients, humidity percentages, wind vector analysis, and astronomical sunrise/sunset calculations.
* **Smart Geolocation & Temporal Mapping:** Dynamic search system that maps geographical inputs to precise time-zone offsets, ensuring data accuracy for time-sensitive forecasting.
* **Reactive React Hook Architecture:** Built using clean, performant React functional paradigms (`useState`, `useEffect`) to optimize data fetching life-cycles, handle concurrent state updates, and ensure modular component scalability.

---

### 🛠️ Tech Stack

**Frontend Engine & Logic**
<p align="left">
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
</p>

**Data Integration Layer**
<p align="left">
  <img src="https://img.shields.io/badge/OpenWeather_API-2D99FF?style=for-the-badge&logo=openweathermap&logoColor=white" alt="OpenWeather" />
  <img src="https://img.shields.io/badge/TimezoneDB_API-FF9900?style=for-the-badge&logo=clock&logoColor=white" alt="TimezoneDB" />
</p>

---

### 📸 Application Showcase

<p align="center">
  <img src="images/1.png" width="48%" />
  <img src="images/2.png" width="48%" />
</p>

---

### 🚀 Getting Started (Local Development)

**1. Clone the repository:**
```bash
git clone https://github.com/filipposobrijanu/Weather-App.git
cd Weather-App
```

**2. Install dependencies:**
```bash
npm install
```

**3. Configure API Credentials:**
Create a `.env` file in the root directory and register your unique API keys from the respective providers:
```env
REACT_APP_WEATHER_API_KEY="..."
REACT_APP_TIMEZONE_API_KEY="..."
```

**4. Launch the application:**
```bash
npm start
```
