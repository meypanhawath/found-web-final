import React from "react";
import "../../App.css";

function GlassCard({
  width = "w-80",
  height = "h-56",
  borderRadius = "rounded-3xl",
  animation = "",
  delay = "",
  duration = "duration-500",
  className = "",
  children,
}) {
  return (
    <div className="">
      <div
        className={`${width} ${height} ${borderRadius} ${duration} ${animation} ${delay} ${className} backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl shadow-black/20 transition-all hover:scale-105 cursor-pointer flex items-center justify-center overflow-hidden group ${
          children ? "p-6" : ""
        }`}
      >
        {children}

        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
      </div>
    </div>
  );
}

export default GlassCard;
