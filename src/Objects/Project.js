class Project{

    Create(name,openDate,deadline,users,tasks,notes,descreption,status)
    {
    let projects = this.getAllProjectsInDatabase()
    projects.push({name:name,openDate:openDate,deadline:deadline,users:users,tasks:tasks,notes:notes,descreption:descreption,status:status})
    localStorage.setItem('projects',JSON.stringify(users))
    }
    
    
    Remove(projectName)
    {
    let projects = this.getAllProjectsInDatabase()
    projects = projects.filter(project => project.name.toLowerCase() !== projectName.toLowerCase())
    localStorage.setItem('projects',JSON.stringify(projects))
    }
    
    
    getAllProjectsInDatabase = () =>  JSON.parse(localStorage.getItem('projects'))
    getProject = (projectName) => this.getAllProjectsInDatabase().filter(project => project.name === projectName).length === 0? null : this.getAllProjectsInDatabase().filter(project => project.name === projectName)[0] 
    
    
    updateProject(specificProject)
    {
        let projects = this.getAllProjectsInDatabase()
    
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