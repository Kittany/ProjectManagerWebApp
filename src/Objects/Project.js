class Project{

    async Create(newProject)
    {

    let projects = await JSON.parse(localStorage.getItem('projects'))

    if (projects.some(project => project.name === newProject.name))
        return;


    await projects.push(newProject)
    await localStorage.setItem('projects',JSON.stringify(projects))

    }
    
    
    Remove(projectName)
    {
    let projects = JSON.parse(localStorage.getItem('projects'))
    projects = projects.filter(project => project.name.toLowerCase() !== projectName.toLowerCase())
    localStorage.setItem('projects',JSON.stringify(projects))
    }
    
    
    getAllProjectsInDatabase = () =>  JSON.parse(localStorage.getItem('projects'))
    getProject = (projectName) => JSON.parse(localStorage.getItem('projects')).filter(project => project.name === projectName).length === 0? null : JSON.parse(localStorage.getItem('projects')).filter(project => project.name === projectName)[0] 
    
    
    async updateProject(specificProject)
    {
        let projects = this.getAllProjectsInDatabase()
        await projects.forEach(project => project.action = "")
        projects = projects.filter(project => project.name.toLowerCase() !== specificProject.name.toLowerCase())
        projects = [...projects,specificProject]

        console.log(projects);
        let item = JSON.stringify(projects)
        
        // localStorage.setItem('projects',JSON.stringify(projects))

            
    
 
    }
    
    }
    
    export default new Project();