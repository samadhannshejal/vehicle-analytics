import React from "react";
import backgroundColors from "../../constant/backgroundColors";
import { Bar } from "react-chartjs-2";

const ElectricRangeData = ({ vehicles }) => {
  const electricRangeData = () => {
    const rangeData = vehicles.reduce((acc, vehicle) => {
      const type = vehicle["Electric Vehicle Type"];
      const range = vehicle["Electric Range"];
      if (type) {
        acc[type] = acc[type] || [];
        acc[type].push(range);
      }
      return acc;
    }, {});

    const averageRanges = Object.keys(rangeData).map((type) => {
      const total = rangeData[type].reduce((sum, r) => sum + r, 0);
      const avg = total / rangeData[type].length;
      return { type, avg };
    });

    return {
      labels: averageRanges.map((item) => item.type),
      datasets: [
        {
          label: "Average Electric Range",
          data: averageRanges.map((item) => item.avg),
          backgroundColor: backgroundColors.slice(0, averageRanges.length),
        },
      ],
    };
  };
  return (
    <div className="cafv-eligibility component">
      <h2>To visualize the electric range of different vehicle types.</h2>
      <Bar
        data={electricRangeData()}
        style={{ width: "50%", height: "400px" }}
      />
    </div>
  );
};

export default ElectricRangeData;
