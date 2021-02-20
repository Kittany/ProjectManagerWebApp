class Project{

    async Create(newProject)
    {

    if (this.getAllProjectsInDatabase() == null)
    return;

    let projects = await JSON.parse(localStorage.getItem('projects'))

    if (projects.some(project => project.name === newProject.name))
        return;

    await projects.push(newProject)
    await localStorage.setItem('projects',JSON.stringify(projects))

    }
    
    
    async Remove(projectName)
    {

    if (this.getAllProjectsInDatabase() == null)
    return;
        

    let projects = await JSON.parse(localStorage.getItem('projects'))
    projects = await projects.filter(project => project.name.toLowerCase() !== projectName.toLowerCase())
    await localStorage.setItem('projects',JSON.stringify(projects))
    }
    
    
    getAllProjectsInDatabase = () =>  JSON.parse(localStorage.getItem('projects'))
    getProject = (projectName) => JSON.parse(localStorage.getItem('projects')).filter(project => project.name === projectName).length === 0? null : JSON.parse(localStorage.getItem('projects')).filter(project => project.name === projectName)[0] 
    
    
    async updateProject(specificProject)
    {

        if (this.getAllProjectsInDatabase() == null)
        return;
        

        let projects = await this.getAllProjectsInDatabase()
        await projects.forEach(project => project.action = "")
        projects = await projects.filter(project => project.name.toLowerCase() !== specificProject.name.toLowerCase())
        projects = [...projects,specificProject]
        await localStorage.setItem('projects',JSON.stringify(projects))

            
    }
    
    }
    
    export default new Project();