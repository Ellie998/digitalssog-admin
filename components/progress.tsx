"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Progress = () => {
  return (
    <ProgressBar
      height="4px"
      color="#668ecf"
      options={{
        showSpinner: false,
        easing: "ease",
        speed: 500,
      }}
      shallowRouting
      delay={100}
    />
  );
};

export default Progress;
