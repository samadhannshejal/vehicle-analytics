import React from "react";
import backgroundColors from "../../constant/backgroundColors";
import { Pie } from "react-chartjs-2";

const CafvEligibility = ({ vehicles }) => {
  const cafvEligibilityData = () => {
    const eligibilityCount = vehicles.reduce((acc, vehicle) => {
      const eligibility =
        vehicle["Clean Alternative Fuel Vehicle (CAFV) Eligibility"];
      acc[eligibility] = (acc[eligibility] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(eligibilityCount),
      datasets: [
        {
          data: Object.values(eligibilityCount),
          backgroundColor: backgroundColors.slice(
            0,
            Object.keys(eligibilityCount).length
          ),
        },
      ],
    };
  };
  return (
    <div className="cafv-eligibility component">
        <h2> To show the percentage of vehicles that are eligible for Clean Alternative Fuel Vehicle (CAFV) status.</h2>
      <Pie
        data={cafvEligibilityData()}
        style={{ width: "50%", height: "400px" }}
      />
    </div>
  );
};

export default CafvEligibility;
