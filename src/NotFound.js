import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useHistory} from "react-router-dom";
import {Link} from 'react-router-dom';
import {Footer} from "./ProjectComponents/Footer";

export function Notfound() {
    const history= useHistory();
  return (
    <div>
      <div className="notfound-container">
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>It looks like you found a glitch in the matrix...</p>
        <Link to="/"><ArrowBackIcon onClick={() => history.push('/')}/>Back to Dashboard</Link>
      </div>
      <div className="notfound-footer"><Footer/></div>
    </div>
  );
}
