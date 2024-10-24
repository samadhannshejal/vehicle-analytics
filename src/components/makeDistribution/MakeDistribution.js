import React from "react";
import backgroundColors from "../../constant/backgroundColors";
import { Pie } from "react-chartjs-2";

const MakeDistribution = ({ vehicles }) => {
  const makeDistributionData = () => {
    const makeCount = vehicles.reduce((acc, vehicle) => {
      const make = vehicle.Make;
      if (make) {
        acc[make] = (acc[make] || 0) + 1;
      }
      return acc;
    }, {});

    return {
      labels: Object.keys(makeCount),
      datasets: [
        {
          data: Object.values(makeCount),
          backgroundColor: backgroundColors,
        },
      ],
    };
  };
  return (
    <div className="cafv-eligibility component">
      <h2>Vehicle Distribution by Make</h2>
      <Pie
        data={makeDistributionData()}
        style={{ width: "50%", height: "400px" }}
      />
    </div>
  );
};

export default MakeDistribution;
