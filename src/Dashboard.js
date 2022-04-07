import { Cards } from "./Cards";
import { LineChart } from "./LineChart";
import {ProjectWrapper} from "./projectWrapper";
import {Footer} from "./ProjectComponents/Footer";

export function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="dashboard-heading-button">
        <h1 className="dashboard-heading-h1">Dashboard</h1>
        <button className="dashboard-button">
          <i class="fa fa-download" aria-hidden="true"></i>
          Generate Report
        </button>
      </div>
       <div>
         <Cards />
       </div>
       <div>
         <LineChart />
       </div>
       <div>
         <ProjectWrapper />
       </div>
       
       <div><Footer /></div>
       
      </div>
  );
}

