
import { projects } from "../../projects";

export default function Portfolio() {
    return (
        <div className="portfolio">
          <h1>Portfolio</h1>
          <div className="container">

            {projects.map((project) => {
              <a
              href={project.url}
              target='_blank'
              key={project.image}
              className='sm:w-1/2 w-100 p-4'
              >
            <div className="flex relative">
                <img 
                alt="gallery"
                className="absolute"
                src={project.image}
                />
            <div className="relative">
                <h1 className='title'>
                    {project.title}
                </h1>
                <p className='descr'>{project.descr}</p>
            </div>
            </div>
            </a>
            })}
            </div> 
            </div>
    );
}