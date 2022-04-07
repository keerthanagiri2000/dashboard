import {Footer} from "./ProjectComponents/Footer";

export function Button() {
  return (
  <div>
    <div className="dashboard-heading-button"><h1 className="dashboard-heading-h1">Buttons</h1></div> 
    <div className="button-wrapper">
      <div>
          <CircleButtons />
          <BrandButtons />
      </div>
      <div>
          <SplitButton />
      </div>
    </div>
    <div><Footer /></div>
  </div>
  );
}

function CircleButtons() {
  const content =
    "Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!";
  const btncir = ".btn-circle";
  const smallbtn = ".btn-circle .btn-sm";
  const largebtn = ".btn-circle .btn-lg";
  return (
    <div className="project-container">
      <div className="project-header">
        <p className="chart-title">Circle Buttons</p>
      </div>
      <div className="card-body">
        <p>{content}</p>
        <div className="btn-cir-wrapper">
        <div className="btn-cir-container">
          <p className="btn-cir">{btncir}</p>
          <div className="button-container">
            <button className="btn-1">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </button>
            <button className="btn-2">
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button className="btn-3">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </button>
            <button className="btn-4">
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </button>
            <button className="btn-5">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="btn-cir-container">
          <p>{smallbtn}</p>
          <div className="sm-button-container">
            <button className="btn-1-sm">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </button>
            <button className="btn-2-sm">
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button className="btn-3-sm">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </button>
            <button className="btn-4-sm">
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </button>
            <button className="btn-5-sm">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="btn-cir-container">
          <p>{largebtn}</p>
          <div className="lg-button-container">
            <button className="btn-1-lg">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </button>
            <button className="btn-2-lg">
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button className="btn-3-lg">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </button>
            <button className="btn-4-lg">
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </button>
            <button className="btn-5-lg">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

function BrandButtons() {
    const btncontent1="Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.";
    const btncontent2="You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.";
    
  return (
    <div className="project-container">
      <div className="project-header">
        <p className="chart-title">Brand Buttons</p>
      </div>
      <div className="card-body">
        <p>{btncontent1}</p>
        <p>{btncontent2}</p>
        <div className="face-google-btn">
            <button>
            <i class="fa fa-google" aria-hidden="true"></i>
             .btn-google
            </button>
            <button>
            <i class="fa fa-facebook" aria-hidden="true"></i>
             .btn-facebook
            </button>
        </div>
      </div>
    </div>
  );
}

function SplitButton(){
    const splitbtncontent="Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.";
    const splitbtnname="Split Buttons with Icon";
    
    const btnSize="Also works with small and large button classes!";
    return(
    <div className="project-container">
      <div className="project-header">
        <p className="chart-title">{splitbtnname}</p>
      </div>
      <div className="card-body">
         <p className="splitcontent">{splitbtncontent}</p>
         <div className="splitbtn-container">
             <button>
             <i class="fa fa-flag" aria-hidden="true"></i>
               Split Button Primary
             </button>
             <button>
              <i class="fa fa-check" aria-hidden="true"></i>
               Split Button Success
             </button>
             <button>
             <i class="fa fa-info-circle" aria-hidden="true"></i>
               Split Button Info
             </button>
             <button>
             <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
               Split Button Warning
             </button>
             <button>
             <i class="fa fa-trash" aria-hidden="true"></i>
               Split Button Danger
             </button>
             <button>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>
               Split Button Secondary
             </button>
             <button>
             <i class="fa fa-arrow-right" aria-hidden="true"></i>
               Split Button Light
             </button>
         </div>
         <p className="btnsize">{btnSize}</p>
         <div className="lastbtn-container">
           <button>
             <i class="fa fa-flag" aria-hidden="true"></i>
               Split Button Small
            </button>
            <button>
             <i class="fa fa-flag" aria-hidden="true"></i>
               Split Button Large
             </button>
         </div>
      </div>
    </div>
    );
}