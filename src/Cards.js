import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ForumIcon from '@mui/icons-material/Forum';


export function Cards() {
  return (
    <div className="cards">
      <div className="card-single">
        <div>
          <span>EARNINGS (MONTHLY)</span>
          <h5>$40,000</h5>
        </div>
        <div>
          <span>
            <CalendarTodayIcon />
          </span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <span>EARNINGS (ANNUAL)</span>
          <h5>$215,000</h5>
        </div>
        <div>
          <span>
            <MonetizationOnIcon />
          </span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <span>TASKS</span>
          <h5>50%</h5>
        </div>
        <div>
          <span>
            <AssignmentIcon />
          </span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <span>PENDING REQUESTS</span>
          <h5>18</h5>
        </div>
        <div>
          <span>
            <ForumIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
