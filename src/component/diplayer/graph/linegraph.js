import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function LineGraph() {
  const data = {
    labels: [
      "Feb",
      "",
      "March",
      "",
      "April",
      "",
      "May",
      "",
      "June",
      "",
      "July",
    ],
    datasets: [
      {
        label: "",
        data: [
          26000000, 21000000, 26500000, 35000000, 31000000, 22500000, 28000000,
          34000000, 24000033, 21000000, 23000000,
        ],
        borderColor: "#7166F9",
        fill: true,
        tension: 0.4,
        borderCapStyle: "round",
        backgroundColor: "#7166F9",
        pointStyle: "circle",
        borderWidth: 5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 40000000,
        ticks: { stepSize: 10000000 },
      },
    },
  };

  return (
    <div>
      <Line data={data} option={options} plugins={[]}>
        {" "}
      </Line>
    </div>
  );
}

export default LineGraph;
