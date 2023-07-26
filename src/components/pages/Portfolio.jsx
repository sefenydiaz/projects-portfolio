
import {projects} from "../../projects";
import Project from "../Project";

export default function Portfolio() {
    console.log(typeof projects)
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="container">

                {projects && projects.map((project) => <Project data = {project}/>
                )}
            </div>
        </div>
    );
}
 