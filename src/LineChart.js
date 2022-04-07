import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ChartsDesign } from "./ChartsDesign";
import { Chart, ArcElement } from "chart.js";
import { DonutChart } from "./DonutChart";
import {BarChart} from "./BarChart";

Chart.register(ArcElement);
export function LineChart() {
  return (
    <div className="charts-row">
      <div className="spline-chart-container">
        <div className="chart-header">
          <div className="chart-title">
            <p>Earnings Overview</p>
          </div>
          <div className="chart-btn">
            <MoreVertIcon />
          </div>
        </div>
        <div className="card-body">
          <ChartsDesign />
        </div>
      </div>

      <div className="donut-chart-container">
        <div className="donut-header">
          <div className="chart-title">
            <p>Revenue Sources</p>
          </div>
          <div className="chart-btn">
            <MoreVertIcon />
          </div>
        </div>
        <div className="donut-body">
          <DonutChart />
        </div>
      </div>
      
    </div>
  );
}


