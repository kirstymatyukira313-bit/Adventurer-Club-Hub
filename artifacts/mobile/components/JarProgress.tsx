import React from "react";
import { View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";

interface JarProgressProps {
  progress: number;
  width?: number;
  height?: number;
}

export function JarProgress({ progress, width = 80, height = 100 }: JarProgressProps) {
  const clampedProgress = Math.max(0, Math.min(1, progress));

  const jarX = width * 0.1;
  const jarWidth = width * 0.8;
  const jarTop = height * 0.15;
  const jarBottom = height * 0.9;
  const jarHeight = jarBottom - jarTop;
  const neckTop = height * 0.05;
  const neckHeight = height * 0.1;

  const fillHeight = jarHeight * clampedProgress;
  const fillY = jarBottom - fillHeight;

  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#60C4FF" stopOpacity="0.9" />
            <Stop offset="1" stopColor="#35A7FF" stopOpacity="1" />
          </LinearGradient>
          <LinearGradient id="jar" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#E5E7EB" stopOpacity="0.6" />
            <Stop offset="0.3" stopColor="#F9FAFB" stopOpacity="0.4" />
            <Stop offset="1" stopColor="#E5E7EB" stopOpacity="0.6" />
          </LinearGradient>
        </Defs>

        {/* Jar lid */}
        <Rect
          x={jarX - 4}
          y={neckTop}
          width={jarWidth + 8}
          height={neckHeight}
          rx={4}
          ry={4}
          fill="#9CA3AF"
          opacity={0.6}
        />

        {/* Water fill */}
        {clampedProgress > 0 && (
          <Rect
            x={jarX + 2}
            y={fillY}
            width={jarWidth - 4}
            height={fillHeight}
            fill="url(#water)"
            rx={clampedProgress >= 1 ? 0 : 4}
            ry={4}
          />
        )}

        {/* Jar outline */}
        <Path
          d={`M${jarX + jarWidth * 0.15},${neckTop + neckHeight}
              L${jarX},${jarTop}
              L${jarX},${jarBottom}
              Q${jarX},${jarBottom + 4} ${jarX + 4},${jarBottom + 4}
              L${jarX + jarWidth - 4},${jarBottom + 4}
              Q${jarX + jarWidth},${jarBottom + 4} ${jarX + jarWidth},${jarBottom}
              L${jarX + jarWidth},${jarTop}
              L${jarX + jarWidth - jarWidth * 0.15},${neckTop + neckHeight}
              Z`}
          fill="url(#jar)"
          stroke="#D1D5DB"
          strokeWidth={1.5}
        />

        {/* Jar shine */}
        <Rect
          x={jarX + 6}
          y={jarTop + 4}
          width={jarWidth * 0.15}
          height={jarHeight * 0.5}
          rx={4}
          fill="#FFFFFF"
          opacity={0.4}
        />
      </Svg>
    </View>
  );
}
