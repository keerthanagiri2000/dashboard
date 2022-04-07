import {Cards} from './Cards';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {Footer} from "./ProjectComponents/Footer";

export function ComponentCards(){
    return(
      <div>
          <div className="dashboard-heading-button"><h1 className="dashboard-heading-h1">Cards</h1></div> 
          <div><Cards /></div>
          <div className="default-card-container">
              <div className="default-basics">
                  <div><DefaultCard /></div>
                  <div><BasicCard /></div>
              </div>
              <div className="default-basics">
                  <div><DropdownCard /></div>
                  <div><CollapsableCard /></div>
              </div>
          </div>
         <div className="cards-footer"><Footer /></div>
      </div>
    );
}

function DefaultCard(){
    const defaultTitle="Default Card Example";
    const defaultcontent="This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.";
    return(
    <div className="project-container">
        <div className="project-header">
          <p className="chart-title">{defaultTitle}</p>
        </div>
        <div className="card-body">
            <p>{defaultcontent}</p>
        </div>
    </div>
    );
}

function BasicCard(){
       const basicTitle="Basic Card Example";
        const basiccontent="The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!";
        return(
        <div className="project-container">
            <div className="project-header">
              <p className="chart-title">{basicTitle}</p>
            </div>
            <div className="card-body">
                <p>{basiccontent}</p>
            </div>
        </div>
    );
}

function DropdownCard(){
    const dropdownTitle="Dropdown Card Example";
    const dropdownContent="Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.";
    return(
        <div className="project-container">
        <div className="project-header">
          <p className="chart-title">{dropdownTitle}</p>
          <div className="chart-btn">
            <MoreVertIcon />
          </div>
        </div>
        <div className="card-body">
            <p>{dropdownContent}</p>
        </div>

    </div>
    );
}

function CollapsableCard(){
    const CollapsableTitle="Collapsable Card Example";
    const CollapsableContent="This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!";

    const [show, setShow] = useState(false);

    return(
        <div className="project-container">
        <div className="project-header">
          <p className="chart-title">{CollapsableTitle}</p>
          <div className="chart-btn" onClick={()=>setShow(!show)}>
          {show ? <ExpandMoreIcon /> : <ArrowForwardIosIcon style={{fontSize:"13px"}}/> }
          </div> 
        </div>
        <div className="card-body">
            <p>{CollapsableContent}</p>
        </div>

    </div>
    );
}