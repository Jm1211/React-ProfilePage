
import Projects from "./Projects";

function ProjectList({classProjects}) {
    return (
        classProjects.map(classProjects => {
            return <Projects key={classProjects.id} classProjects={classProjects}/>
        })

    );
}   

export default ProjectList;