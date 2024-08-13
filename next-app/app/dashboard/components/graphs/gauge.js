"use client";
import { Gauge as MuiGauge, gaugeClasses } from "@mui/x-charts";

const GaugeComponent = () => {
  return (
    <div className="h-full">
      <MuiGauge
        value={67}
        startAngle={-110}
        endAngle={110}
        cornerRadius={50}
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#808080", // Change the fill color to gray
          },
        })}
      />
    </div>
  );
};

export default GaugeComponent;
