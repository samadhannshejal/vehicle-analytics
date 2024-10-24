import Lottie from "lottie-react";
import React from "react";

const DisplayLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    animationData: animationData,
  };
  return (
    <div>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
      />
    </div>
  );
};

export default DisplayLottie;
