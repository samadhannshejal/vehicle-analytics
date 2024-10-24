import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import CafvEligibility from "../cafvEligibilityData/CafvEligibility";
import Header from "../header/Header";
import ElectricRangeData from "../electricRangeData/ElectricRangeData";
import ElectricUtilityData from "../electricData/ElectricUtilityData";
import MakeDistribution from "../makeDistribution/MakeDistribution";
import MsrpDistrubutionData from "../msrpDistrubutionData/MsrpDistrubutionData";
import "./dashboard.css";
import "./../style.css";
import DisplayLottie from "../../lottie/DisplayLottie";
import animationData from "../../lottie/lottieAnimation.json";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const DashBoard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState("");
  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setVehicles(jsonData);
      };
      reader.onerror = (err) => {
        setError("Failed to read file");
      };
      reader.readAsArrayBuffer(file); // Read file as ArrayBuffer
    }
  };

  return (
    <div>
      <Header onFileUpload={handleFileUpload} />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {vehicles.length > 0 ? (
        <div className="components">
          <CafvEligibility vehicles={vehicles} />
          <ElectricRangeData vehicles={vehicles} />
          <MsrpDistrubutionData vehicles={vehicles} />
          <ElectricUtilityData vehicles={vehicles} />
          <MakeDistribution vehicles={vehicles} />
        </div>
      ) : (
        <div style={{ width: "600px", paddingLeft: "300px" }}>
          <DisplayLottie animationData={animationData} />
        </div>
      )}
    </div>
  );
};

export default DashBoard;
