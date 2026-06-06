import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface ProgressRingProps {
  size?: number;
  strokeWidth?: number;
  progress: number;
  color?: string;
  backgroundColor?: string;
}

export function ProgressRing({
  size = 52,
  strokeWidth = 5,
  progress,
  color = "#35A7FF",
  backgroundColor = "#E5E7EB",
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const strokeDashoffset = circumference * (1 - clampedProgress);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
    </View>
  );
}
