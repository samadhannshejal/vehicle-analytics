import React from "react";
import backgroundColors from "../../constant/backgroundColors";
import { Bar } from "react-chartjs-2";

const ElectricUtilityData = ({ vehicles }) => {
  const electricUtilityData = () => {
    const utilityCount = vehicles.reduce((acc, vehicle) => {
      const utility = vehicle["Electric Utility"];
      acc[utility] = (acc[utility] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(utilityCount),
      datasets: [
        {
          label: "Number of Vehicles",
          data: Object.values(utilityCount),
          backgroundColor: backgroundColors.slice(
            0,
            Object.keys(utilityCount).length
          ),
        },
      ],
    };
  };
  return (
    <div className="cafv-eligibility component">
      {" "}
      <h2>To visualize the number of vehicles serviced by each electric utility.</h2>
      <Bar data={electricUtilityData()}   style={{width:"50%", height:"400px"}} />
    </div>
  );
};

export default ElectricUtilityData;
