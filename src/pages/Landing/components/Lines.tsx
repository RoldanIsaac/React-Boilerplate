import React from "react";

type Props = {
  stroke?: string;
  strokeWidth?: number | string;
  width?: number | string;
  mask?: string;
  defs?: React.ReactNode;
  strokeArray?: string[];
};

const Lines = ({
  stroke = "black",
  strokeWidth = 5,
  width = 841,

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
      d: "M0 2H600",
    },
    {
      d: "M0 66H600",
    },
    {
      d: "M0 130H600",
    },
    {
      d: "M0 193H600",
    },
  ];

  return (
    <svg
      className="absolute top-0 left-0"
      width={width}
      height={height}
      viewBox="0 0 600 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          stroke={getStroke(index)}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeArray ? "80 520" : undefined}
        >
          {strokeArray && (
            <animate
              attributeName="stroke-dashoffset"
              from="600"
              to="0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          )}
        </path>
      ))}
    </svg>
  );
};

export default Lines;
