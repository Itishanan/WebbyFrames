import { CChart } from "@coreui/react-chartjs";
const Polar = () => {
  return (
    <div>
      <CChart
        type="polarArea"
        data={{
          datasets: [
            {
              data: [11, 16, 7, 12, 18],
              backgroundColor: [
                "#808080",
                "#D3D3D3",
                "#808080",
                "#C0C0C0",
                "#808080",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Polar;
