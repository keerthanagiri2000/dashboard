import LinearProgress from '@mui/material/LinearProgress';
import {Footer} from "./ProjectComponents/Footer";

export function OtherUtilities(){
    const otherUtility="Other Utilities";
    return(
      <div>
            <div className="dashboard-heading-button">
              <h1 className="dashboard-heading-h1">{otherUtility}</h1>
            </div>
            <div className="header-content-dashboard">
               <p>Bootstrap's default utility classes can be found on the official <a href="#">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            </div>
            <div className="other-utility-container">
                <div>
                  <div><OverFlow /></div>
                  <div><ProgressSmall /></div>
                  <div><DropdownNoArrow /></div>
                </div>

                <div>
                    <RotationUtilities />
                </div>
            </div>
            <div><Footer /></div>
      </div>
    );
}

export function OverFlow(){
    const overflowtitle="Overflow Hidden Utilty";
    return(
        <div className="project-container">
          <div className="project-header">
            <p className="chart-title">{overflowtitle}</p>
          </div>
          <div className="card-body">
              <p className="overflow-content">Use <span className="overflow-span">.o-hidden</span> to set the overflow property of any element to hidden.</p>
          </div>
        </div>
    );
}

export function ProgressSmall(){
    const normal="Normal Progress Bar";
    const small="Small Progress Bar";
    const progresstitle="Progress Small Utility";
    return(
     <div className="project-container">
        <div className="project-header">
          <p className="chart-title">{progresstitle}</p>
        </div>
        <div className="card-body">
            <div>
                <p>{normal}</p>
                <p>
                <LinearProgress variant="determinate" value={50} style={{height:"15px", borderRadius:"5px"}} />
                </p>
                <p>{small}</p>
                <p><LinearProgress variant="determinate" value={50} style={{height:"8px", borderRadius:"5px"}} /></p>
                <p>Use the <span className="overflow-span">.progress-sm</span> class along with <span className="overflow-span">.progress</span></p>
            </div>
        </div>
    </div>
    );
}

export function DropdownNoArrow(){
    const noarrow="Dropdown - No Arrow";
    return(
     <div className="project-container">
        <div className="project-header">
          <p className="chart-title">{noarrow}</p>
        </div>
        <div className="card-body">
            <div>
                <button className='noarrow-btn'>Dropdown (no arrow)</button>
                <p className='noarrow-btn-content'>Add the <span className='overflow-span'>.no-arrow</span> class alongside the <span className='overflow-span'>.dropdown</span></p>
            </div>
        </div>
    </div>
    );
}

export function RotationUtilities(){
    const rotation="Rotation Utilities";
    return(
      <div className="project-container">
        <div className="project-header">
          <p className="chart-title">{rotation}</p>
        </div>
        <div className="card-body">
            <div className='rotate-1st'>.rotate-15</div>
            <hr />
            <div className='rotate-2st'>.rotate-n-15</div>
        </div>
       </div>
    );
}