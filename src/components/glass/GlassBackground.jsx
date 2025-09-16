import React from 'react';

const GlassBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-1">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B36D0] to-[#8B5FDF] opacity-60"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5FDF] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#6B36D0] rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#9D7AE8] rounded-full opacity-25 animate-bounce"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassBackground;