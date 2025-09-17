import React from "react";
import "../../../App.css";

function Circle({
  width = "w-80",
  height = "h-80",
  borderRadius = "rounded-full",
  animation = "",
  delay = "",
  duration = "duration-500",
  className = "",
  children,
}) {
  return (
    <div className="">
      <div
        className={`${width} ${height} ${borderRadius} ${duration} ${animation} ${delay} ${className} bg-[#f5f5f5] blur-2xl overflow-hidden group ${
          children ? "p-6" : ""
        }`}
      >
        {children}

        <div className={`absolute inset-0`}></div>
      </div>
    </div>
  );
}

export default Circle;
