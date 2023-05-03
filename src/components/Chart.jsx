import "chartjs-adapter-date-fns";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const options = {
  responsive: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
      },
      ticks: {
        maxTicksLimit: 8,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const data = {
  labels: [
    "2023-04-12",
    "2023-04-13",
    "2023-04-14",
    "2023-04-15",
    "2023-04-16",
    "2023-04-17",
    "2023-04-19",
    "2023-04-20",
    "2023-04-22",
    "2023-04-24",
    "2023-04-28",
    "2023-04-30",
  ].map((date) => new Date(date)),
  datasets: [
    {
      label: "Expenses",
      data: [100, 600, 1000, 200, 300, 400, 700, 250, 360, 920, 420, 150],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0.3,
    },
  ],
};

const Chart = () => {
  return (
    <div className="m-2">
      <Line options={options} data={data} />;
    </div>
  );
};

export default Chart;
