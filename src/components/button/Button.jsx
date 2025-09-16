import React from 'react';

function Btn({
  children,
  padding = "px-10 py-5",
  rounded = "rounded-xl",
  bgColor = "bg-primary",
  hoverBgColor = "hover:bg-hover-primary",
  textColor = "text-white",
  borderColor = "border-primary",
  shadow = "shadow-lg",
  transition = "transition-all duration-200",
  hover = "hover:scale-105",
  onClick,
  animation = "",
  delay = "",
  duration = "duration-500",
  disabled = false,
  type = "button",
  className = ""
}) {
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`
        ${padding} ${rounded} ${bgColor} ${hoverBgColor} 
        ${textColor} ${borderColor} ${shadow} ${transition} ${hover}
        ${disabledStyles} ${animation} ${delay} ${duration} ${className} font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
      `.trim()}
    >
      {children}
    </button>
  );
}

export function PrimaryBtn(props) {
  return <Btn {...props} />;
}

export function SecondaryBtn(props) {
  return <Btn {...props} bgColor="bg-tranparent" hoverBgColor="hover:bg-gray-100" textColor="text-primary" borderColor='border-2 border-primary' />;
}

export function DangerBtn(props) {
  return <Btn {...props} bgColor="bg-red-600" hoverBgColor="hover:bg-red-700" textColor="text-white" />;
}