class Project{

    async Create(value)
    {
    let projects = await JSON.parse(localStorage.getItem('projects'))
    await projects.push(value)
    console.log(projects);

    localStorage.setItem('projects',JSON.stringify(projects))
    }
    
    
    Remove(projectName)
    {
    let projects = JSON.parse(localStorage.getItem('projects'))
    projects = projects.filter(project => project.name.toLowerCase() !== projectName.toLowerCase())
    localStorage.setItem('projects',JSON.stringify(projects))
    }
    
    
    getAllProjectsInDatabase = () =>  JSON.parse(localStorage.getItem('projects'))
    getProject = (projectName) => JSON.parse(localStorage.getItem('projects')).filter(project => project.name === projectName).length === 0? null : JSON.parse(localStorage.getItem('projects')).filter(project => project.name === projectName)[0] 
    
    
    updateProject(specificProject)
    {
        let projects = JSON.parse(localStorage.getItem('projects'))
    
       if (projects.filter(project => project.name === specificProject.name).length !== 0)
        {
            projects = projects.filter(project => project.name !== specificProject.name)
            projects.push(specificProject)
            localStorage.setItem('projects',JSON.stringify(projects))
        }
    
        else
            console.log('You tried to update a project that does not exist!')
    
       
         
    }
    
    }
    
    export default new Project();