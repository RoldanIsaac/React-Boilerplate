import React from "react";

interface SectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  bgColor?: string;
  svgBg?: React.ReactNode;
  flip?: boolean;
}

const Section: React.FC<SectionProps> = ({
  className,
  id,
  children,
  bgColor,
  svgBg,
  flip,
}) => {
  const styles: React.CSSProperties = {
    background: bgColor,
    width: "100%",
  };
  const bgStyles: React.CSSProperties = {
    backgroundImage: `url("${svgBg}")`,
    transform: flip ? "rotate(180deg)" : "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    zIndex: 0,
  };
  return (
    <div
      id={id}
      className={`relative flex flex-col md:flex-row min-w-[399px] 
   ${className || ""}`}
      style={styles}
    >
      {/* Background svg */}
      {svgBg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={bgStyles}
        ></div>
      )}
      {/* Content */}
      <div className="relative z-10 min-w-full">{children}</div>
    </div>
  );
};

export default Section;
