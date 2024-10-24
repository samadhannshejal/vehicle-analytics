import React from "react";
import { Bar } from "react-chartjs-2";
import backgroundColors from "../../constant/backgroundColors";

const MsrpDistrubutionData = ({ vehicles }) => {
  const msrpDistributionData = () => {
    const msrpData = vehicles.reduce((acc, vehicle) => {
      const make = vehicle.Make;
      const msrp = vehicle["Base MSRP"];
      if (make && msrp > 0) {
        acc[make] = acc[make] || [];
        acc[make].push(msrp);
      }
      return acc;
    }, {});

    const msrpStats = Object.keys(msrpData).map((make) => {
      const values = msrpData[make];
      return {
        make,
        min: Math.min(...values),
        max: Math.max(...values),
        avg: values.reduce((sum, v) => sum + v, 0) / values.length,
      };
    });

    return {
      labels: msrpStats.map((item) => item.make),
      datasets: [
        {
          label: "Average MSRP",
          data: msrpStats.map((item) => item.avg),
          backgroundColor: backgroundColors.slice(0, msrpStats.length),
        },
      ],
    };
  };
  return (
    <div className="cafv-eligibility component">
      <h2>To visualize the distribution of MSRP for different vehicle makes.</h2>
      <Bar data={msrpDistributionData()}  style={{width:"50%", height:"400px"}}/>
      </div>
  );
};

export default MsrpDistrubutionData;
