import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  scales,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale
);

export function ResultsChart(){  const data = {
    labels: ["Arsenal", "Chelsea", "Liverpool", "Barcelona", "Bayern Munich"],
    datasets: [
      {
        label: "Goals Scored",
        data: [8,5,7,6,9],
        backgroundColor: "#F8B607"
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks:{color: "#eaeaea"}
      },
      x:{
        ticks:{color: "#eaeaea"}
      }
    },
    plugins: {
      legend: { position: "top", labels:{color: "#ffffff" } },
     // title: { display: true, text: "Monthly Sales (Bar Chart)", color: "#ffffff" },
    },
  };

  return <Bar data={data} options={options} />;
}

export function PerformanceChart(){ 
    const data = {
    labels: ["Match1", "Match2", "Match3", "Match4", "Match5"],
    datasets: [
      {
        label: "Possession %",
        data: [58, 29, 67, 54, 47],
        borderColor: "#00FF9D",
        backgroundColor: "rgba(0,255,157,0.2)",
        fill: true,
        tension: 0.4
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks:{color: "#eaeaea"}
      },
      x:{
        ticks:{color: "#eaeaea"}
      }
    },
    plugins: {
      //title: { display: true, text: "Daily Visitors (Line Chart)" , color: "#ffffff" },
      legend: { position: "top", labels:{color: "#ffffff" } },
    },
  };

  return <Line data={data} options={options} />;
}
