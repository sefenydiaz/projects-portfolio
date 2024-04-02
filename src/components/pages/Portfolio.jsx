
import {projects} from "../../projects";
import Project from "../Project";

export default function Portfolio() {
    console.log(typeof projects)
    return (
        <div className="portfolio">
            <h1 className="text" id="portfolio">Portfolio</h1>
            <div className="container" id="proj-cont">

                {projects && projects.map((project) => <Project data = {project}/>
                )}
            </div>
        </div>
    );
}
 