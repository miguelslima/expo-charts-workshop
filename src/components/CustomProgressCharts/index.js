import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ProgressCircle } from 'react-native-svg-charts';

function CustomProgressBarChart({ chartData, chartDimensions }) {
  return chartDimensions ? (
    <ProgressCircle
      progress={chartData}
      progressColor="rgba(175, 255, 100, 1)"
      backgroundColor="rgba(175, 255, 100, 0.2)"
      strokeWidth={10}
      style={{
        borderRadius: 8,
        width: chartDimensions.width,
        height: chartDimensions.height,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2b2b73" />
  );
}

export default CustomProgressBarChart;
