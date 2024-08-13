import { CChart } from "@coreui/react-chartjs";
import { use } from "react";
const Radar = () => {
  return (
    <div>
      <CChart
        type="radar"
        data={{
          labels: [
            "UserName",
            "UserName",
            "UserName",
            "UserName",
            "UserName",
            "UserName",
          ],
          datasets: [
            {
              label: "userName",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220, 220, 220, 1)",
              data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
              label: "userName2",
              backgroundColor: "rgba(151, 187, 205, 0.2)",
              borderColor: "rgba(151, 187, 205, 1)",
              pointBackgroundColor: "rgba(151, 187, 205, 1)",
              pointBorderColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151, 187, 205, 1)",
              data: [28, 48, 40, 19, 96, 27, 100],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {},
          },
        }}
      />
    </div>
  );
};

export default Radar;
