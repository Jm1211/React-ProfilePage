

function Projects({classProjects}) {
    return [(
        <div key={classProjects.id}>{classProjects.name}</div>
    )];
}

export default Projects;