
export function Illustrations(){
    return(
        <div className="project-container">
        <div className="project-header">
          <p className="chart-title">Illustrations</p>
        </div>
        <div>
            <IllustrationBody />
        </div>
        
      </div>
    );
}

export function IllustrationBody(){
    const img="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg";
    return(
        <div className="progress-bar-container">
           <div>
               <img src={img} />
           </div>
           <div>
               <p>Add some quality, svg illustrations to your project courtesy of <a target='_blank' href="https://undraw.co/">unDraw </a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
           </div>
           
           <a target="_blank" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
        </div>
    );
}