import { BarChart } from "./BarChart";
import { ChartsDesign } from "./ChartsDesign";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { DonutChart } from "./DonutChart";
import {Footer} from "./ProjectComponents/Footer";
ChartJS.register(...registerables);

export function Charts() {
  const chartData = {
    h1: "Charts",
    para: "Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the ",
  };
  return (
    <div className="charts-container">
      <div className="charts-container-head">
        <h1>{chartData.h1}</h1>
        <p>
          {chartData.para}
          <a target="_blank" href="https://www.chartjs.org/docs/latest/">
            {" "}
            official Chart.js documentation.
          </a>
        </p>
      </div>
      <div className="charts-row">
      <div className="spline-chart-container">
        <div className="chart-header">
          <div className="chart-title">
            <p>Area Chart</p>
          </div>
        </div>
        <div className="card-body">
          <ChartsDesign />
        </div>
      </div>

      <div className="donut-chart-container">
        <div className="donut-header">
          <div className="chart-title">
            <p>Donut Chart</p>
          </div>
        </div>
        <div className="card-body">
          <DonutChart />
        </div>
      </div>
   </div>
   <div className="barchart-container">
     <BarChart />
   </div>
   <div><Footer /></div>
   </div>
  );
}
