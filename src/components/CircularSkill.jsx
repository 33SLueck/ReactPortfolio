import React from "react";

function CircularSkill({
  size,
  strokeWidth,
  percentage,
  title,
  highlightColor,
}) {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const circlePercentage = (100 - percentage) / 100;
  const halfSize = size / 2;
  const transformString = "rotate(-90 " + halfSize + " " + halfSize + ")";

  return (
    <div className="skill_circle">
      <svg width={size} height={size} viewBox={viewBox}>
        <g transform={transformString}>
          <circle
            r={radius}
            cx={halfSize}
            cy={halfSize}
            fill="transparent"
            stroke="lightgrey"
            strokeWidth={`${strokeWidth}px`}
            strokeDasharray={circumference}
            strokeDashoffset="0"
          ></circle>
          <circle
            r={radius}
            cx={halfSize}
            cy={halfSize}
            fill="transparent"
            stroke={highlightColor}
            strokeWidth={`${strokeWidth}px`}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * circlePercentage}
          ></circle>
        </g>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
          {percentage}%
        </text>
      </svg>
      <p>{title}</p>
    </div>
  );
}

export default CircularSkill;
