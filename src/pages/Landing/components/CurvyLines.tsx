import React from "react";

type Props = {
  stroke?: string;
  strokeWidth?: number | string;
  width?: number | string;
  mask?: string;
  defs?: React.ReactNode;
  strokeArray?: string[];
};

const CurvyLines = ({
  stroke = "black",
  strokeWidth = 5,
  width = 841,
  mask,
  defs,
  strokeArray,
}: Props) => {
  const height = typeof width === "number" ? (width * 845) / 841 : 845;

  const getStroke = (index: number): string => {
    if (strokeArray && strokeArray.length > index) {
      return strokeArray[index];
    }
    return stroke;
  };

  const paths = [
    {
      d: "M0.16791 253.497C333.856 275.96 198.793 390.167 840.168 402.497",
    },
    {
      d: "M0.16791 561.497C333.856 543.557 198.793 452.345 840.168 442.497",
    },
    {
      d: "M0.16791 842.497C522.893 816.497 266.96 523.497 840.168 511.497",
    },
    {
      d: "M0.16791 2.49695C522.893 28.4969 266.96 321.497 840.168 333.497",
    },
  ];

  return (
    <svg
      className="absolute top-0 left-0"
      width={width}
      height={height}
      viewBox="0 0 841 845"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {defs && <defs>{defs}</defs>}
      {paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          stroke={getStroke(index)}
          strokeWidth={strokeWidth}
          mask={mask ? mask : undefined}
        />
      ))}
    </svg>
  );
};

export default CurvyLines;
