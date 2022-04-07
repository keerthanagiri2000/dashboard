import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Footer} from "./ProjectComponents/Footer";

export function Animations(){
    const animationtitle="Animation Utilities";
    return(
        <div>
            <div className="dashboard-heading-button">
              <h1 className="dashboard-heading-h1">{animationtitle}</h1>
            </div>
            <div className="header-content-dashboard">
               <p>Bootstrap's default utility classes can be found on the official <a href="#">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
             </div>
             <div className="grow-fade-container">
               <div className="grow-animation-container"><GrowAnimation /></div>
               <div className="fade-aniamtion-container"><FadeAnimation /></div>
             </div>
             <div className='animation-footer'><Footer /></div>
        </div>

    );
}

export function GrowAnimation(){
  const growAnimation="Grow In Animation Utilty";
  const growHead=".animated--grow-in";
  const navbarDrop="Navbar Dropdown Example:";
  const noteContent="Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.";
  return(
    <div>
      <div className="project-container">
              <div className="project-header">
                <p className="chart-title">{growAnimation}</p>
              </div>
              <div className="card-body">
                  <div className="grow-container">
                    <p className="growhead">{growHead}</p>
                    <p className="navbardrop">{navbarDrop}</p>
                    <div className="growani-nav">
                      <p>Navbar</p>
                      <p>Dropdown</p>
                      <ArrowDropDownIcon style={{marginTop:"13px"}}/>
                    </div>
                    <p className="note">{noteContent}</p>
                  </div>
              </div>
      </div>
    </div>
  );
}

export function FadeAnimation(){
  const fadeAnimation="Fade In Animation Utilty";
  const fadeHead=".animated--fade-in";
  const navbarDrop="Navbar Dropdown Example:";
  const note="Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!";

  return(
    <div>
      <div className="project-container">
              <div className="project-header">
                <p className="chart-title">{fadeAnimation}</p>
              </div>
              <div className="card-body">
                  <div className="grow-container">
                    <p className="growhead">{fadeHead}</p>
                    <p className="navbardrop">{navbarDrop}</p>
                    <div className="growani-nav">
                      <p>Navbar</p>
                      <p>Dropdown</p>
                      <ArrowDropDownIcon style={{marginTop:"13px"}}/>
                    </div>
                    <div className="fade-dropdown-btn-container">
                      <p className="fade-dropdown-btn-title">Dropdown Button Example:</p>
                      <button className="fade-dropdown-btn">Dropdown <ArrowDropDownIcon /></button>
                      
                    </div>
                    <p className="note">{note}</p>
                  </div>
              </div>
      </div>
    </div>

  );
}