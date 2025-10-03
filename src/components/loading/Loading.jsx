import React, { useEffect } from "react";
import "./loading.css";

const Loading = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 3000); // 3seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loadingContainer">
      <div className="spinnerWrapper">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="plane">✈️</div>
      </div>
      <h2 className="loadingText">Loading your dream stay...</h2>
    </div>
  );
};

export default Loading;
