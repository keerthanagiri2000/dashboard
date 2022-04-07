import {Footer} from "./ProjectComponents/Footer";

export function Colors() {
  const clrtitle = "Color Utilities";
  return (
    <div>
      <div className="dashboard-heading-button">
        <h1 className="dashboard-heading-h1">{clrtitle}</h1>
      </div>
      <div className="header-content-dashboard">
        <p>
          Bootstrap's default utility classes can be found on the official{" "}
          <a href="#">Bootstrap Documentation</a> page. The custom utilities
          below were created to extend this theme past the default utility
          classes built into Bootstrap's framework.
        </p>
      </div>
      <div className="button-wrapper">
        <div className="default-basics">
          <div><TextColor /></div>
          <div><CustomFontSize /></div>
        </div>
        <div>
            <BackgroundGradient />
        </div>
        <div>
            <GrayscaleBackground />
        </div>
      </div>
      <div><Footer /></div>
    </div>
  );
}

function TextColor() {
  const textclrname = {
    clr1: ".text-gray-100",
    clr2: ".text-gray-200",
    clr3: ".text-gray-300",
    clr4: ".text-gray-400",
    clr5: ".text-gray-500",
    clr6: ".text-gray-600",
    clr7: ".text-gray-700",
    clr8: ".text-gray-800",
    clr9: ".text-gray-900",
  };

  return (
    <div>
      <div className="project-container">
        <div className="project-header">
          <p className="chart-title">Custom Text Color Utilities</p>
        </div>
        <div className="card-body">
          <div className="textClr-container">
              <div className="textclr-four">
              <p>{textclrname.clr1}</p>
              <p>{textclrname.clr2}</p>
              <p>{textclrname.clr3}</p>
              <p>{textclrname.clr4}</p>
              </div>
            <div className="textclr-five">
            <p>{textclrname.clr5}</p>
            <p>{textclrname.clr6}</p>
            <p>{textclrname.clr7}</p>
            <p>{textclrname.clr8}</p>
            <p>{textclrname.clr9}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function CustomFontSize() {
    const fontsm=".text-xs";
    const fontlg=".text-lg";
  return (
    <div>
      <div className="project-container">
        <div className="project-header">
          <p className="chart-title">Custom Font Size Utilities</p>
        </div>
        <div className="card-body">
          <div className="customfont-container">
           <p>{fontsm}</p>
           <p>{fontlg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundGradient(){
    const gradientClr={
        graClr1:".bg-gradient-primary",
        graClr2:".bg-gradient-secondary",
        graClr3:".bg-gradient-success",
        graClr4:".bg-gradient-info",
        graClr5:".bg-gradient-warning",
        graClr6:".bg-gradient-danger",
        graClr7:".bg-gradient-light",
        graClr8:".bg-gradient-dark"
    };
    return(
     <div>
        <div className="project-container">
          <div className="project-header">
            <p className="chart-title">Custom Background Gradient Utilities</p>
          </div>
          <div className="card-body">
              <div className="gradient-container">
              <p>{gradientClr.graClr1}</p>
              <p>{gradientClr.graClr2}</p>
              <p>{gradientClr.graClr3}</p>
              <p>{gradientClr.graClr4}</p>
              <p>{gradientClr.graClr5}</p>
              <p>{gradientClr.graClr6}</p>
              <p>{gradientClr.graClr7}</p>
              <p>{gradientClr.graClr8}</p>
              </div>
          </div>
        </div>
     </div>
    );
}

function GrayscaleBackground(){
    const grayScale = {
        clr1: ".bg-gray-100",
        clr2: ".bg-gray-200",
        clr3: ".bg-gray-300",
        clr4: ".bg-gray-400",
        clr5: ".bg-gray-500",
        clr6: ".bg-gray-600",
        clr7: ".bg-gray-700",
        clr8: ".bg-gray-800",
        clr9: ".bg-gray-900",
      };
    
    return(
        <div>
            <div className="project-container">
              <div className="project-header">
                <p className="chart-title">Custom Grayscale Background Utilities</p>
              </div>
              <div className="card-body">
                  <div className="grayscale-container">
                  <p>{grayScale.clr1}</p>
                  <p>{grayScale.clr2}</p>
                  <p>{grayScale.clr3}</p>
                  <p>{grayScale.clr4}</p>
                  <p>{grayScale.clr5}</p>
                  <p>{grayScale.clr6}</p>
                  <p>{grayScale.clr7}</p>
                  <p>{grayScale.clr8}</p>
                  <p>{grayScale.clr9}</p>
                  </div>
              </div>
            </div>
        </div>

    );
}