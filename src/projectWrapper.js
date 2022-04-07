import {Projects} from "./ProjectComponents/Projects";
import {ColorCard} from "./ProjectComponents/ColorCard"
import {Illustrations} from "./ProjectComponents/Illustrations";
import {Development} from "./ProjectComponents/DevelopmentApproach";


export function ProjectWrapper(){
    return(
        <div className="project-wrapper-container">
            <div className="projects-colorcard">
              <div><Projects /></div>
              <div><ColorCard /></div>
            </div>
            <div className="illustration-developmemt">
                <div><Illustrations /></div>
                <div><Development /></div>
            </div>
            
        </div>

    );
}