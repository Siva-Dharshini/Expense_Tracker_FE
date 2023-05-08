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
    y: {
      beginAtZero: true,
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

const Chart = ({ data }) => {
  return (
    <div className="m-2">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
