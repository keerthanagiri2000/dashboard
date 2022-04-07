import {Footer} from "./ProjectComponents/Footer";

export function Borders(){
    const borderUtilities="Border Utilities";

    const borderDetail=[
      {border:".border-left-primary"},
      {border:".border-bottom-primary"},
      {border:".border-left-secondary"},
      {border:".border-bottom-secondary"},
      {border:".border-left-success"},
      {border:".border-bottom-success"},
      {border:".border-left-info"},
      {border:".border-bottom-info"},
      {border:".border-left-warning"},
      {border:".border-bottom-warning"},
      {border:".border-left-danger"},
      {border:".border-bottom-danger"},
      {border:".border-left-dark"},
      {border:".border-bottom-dark"}
    ];

  return(
  <div>
      <div className="dashboard-heading-button">
        <h1 className="dashboard-heading-h1">{borderUtilities}</h1>
       </div>
      <div className="header-content-dashboard">
        <p>Bootstrap's default utility classes can be found on the official <a href="#">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
      </div>
      <div>
      <div className="borderleft-container-wrapper">
       {borderDetail.map(product =>(
         <BorderLeft key={product} product={product} />
       ))}
      </div>
      </div>
      <div><Footer /></div>
  </div>
    );
}

function BorderLeft({product}){
  return(
    <div>
       {product.border}
    </div>
     );
}

