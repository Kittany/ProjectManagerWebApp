import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "../../Styles/CCAdminPage.css";

export default function FCAssignUser(props) {
    const [projectNameFilter, setProjectNameFilter] = useState("");
    // const [allUserProjects, setAllUserProjects] = useState(["Skype", "Google"]); // change this from empty string to current projects for the specific use in database
    const [currentUsername, setCurrentUsername] = useState({ username: props.username });
    const [users, setUsers] = useState([
        { name: "3bbod", projects: ["Skype", "Google"] },
        { name: "meo", projects: ["Facebook", "Youtube", "Skype"] },
        { name: "lolo", projects: ["Google"] },
    ]);
    const [allProjects, setAllProjects] = useState([
        {
            name: "Skype",
            openDate: "2020-05-30",
            deadline: "2021-10-20",
            users: [{ username: "3bbod" }, { username: "lolo" }],
            tasks: ["task1"],
            notes: ["note1"],
            descreption: "bla bla bla",
            status: true,
        },
        {
            name: "Facebook",
            openDate: "2020-05-30",
            deadline: "2021-10-20",
            users: [{ username: "meow" }, { username: "lolo" }],
            tasks: ["task2"],
            notes: ["note3"],
            descreption: "bla bla bla",
            status: true,
        },
        {
            name: "Youtube",
            openDate: "2020-05-30",
            deadline: "2021-10-20",
            users: [{ username: "3bbod" }, { username: "meow" }],
            tasks: ["task1"],
            notes: ["note1"],
            descreption: "bla bla bla",
            status: false,
        },
        {
            name: "Google",
            openDate: "2020-05-30",
            deadline: "2021-10-20",
            users: [{ username: "3bbod" }, { username: "lolo" }],
            tasks: ["task"],
            notes: ["note5"],
            descreption: "bla bla bla",
            status: false,
        },
    ]); // change to all the projects available on the database

    const AssignUserToProject = (projectName) => {
        // add the project to the current user

        // let t = allProjects.map((project) =>project.name === projectName? project.users.push(currentUsername): project);
        // setAllProjects(allProjects.map((project) => project.name === projectName ? project.users.push(currentUsername) : 1))
        const t = users.map((user) => user == currentUsername ? user.projects.push(projectName) : user)
        const r = allProjects.map((project) => project.name == projectName ? project.users.push(currentUsername) : project)
        allProjects.forEach((project) => project.name === projectName && project.users.push(currentUsername));
        // setAllProjects(r)
        setUsers(t);
        //users.forEach((user) => user === currentUsername && user.projects.push(projectName));
    };

    const test = () => {
        console.log(users);
        console.log(allProjects);
    };

    return (
        <div id="FCAssignUser" onMouseDown={props.closeAssignUserWindow}>
            <div id="FCAssignUserChild">
                <h4
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        alignSelf: "center",
                        marginTop: "5%",
                    }}
                >
                    Assign user
        </h4>
                <Form.Row className="row" style={{ height: "20%", margin: 0 }}>
                    <Form.Group
                        controlId="formGridAddress1"
                        style={{ width: "80%", height: "20%" }}
                    >
                        <Form.Control
                            onChange={(e) => setProjectNameFilter(e.target.value)}
                            placeholder="Project name"
                            value={projectNameFilter}
                        />
                    </Form.Group>
                </Form.Row>
        ))
        <div
                    style={{
                        width: "80%",
                        height: "60%",
                        alignSelf: "center",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        border: "gray 1px solid",
                        overflow: "scroll",
                        overflowX: "hidden",
                    }}
                >
                    {allProjects
                        .filter((project) =>
                            project.users.every(
                                (userInProject) =>
                                    userInProject.username != currentUsername.username
                            )
                        )
                        .filter(
                            (project) =>
                                project.name.toLowerCase().indexOf(projectNameFilter) != -1
                        )
                        .map((project) => (
                            <div
                                style={{
                                    borderBottom: "gray 1px solid",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "2%",
                                }}
                            >
                                <p
                                    style={{
                                        color: "black",
                                        fontWeight: "bold",
                                        fontFamily: "Poppins",
                                        margin: 0,
                                    }}
                                >
                                    {project.name}
                                </p>
                                <Button
                                    onClick={(e) => AssignUserToProject(project.name)}
                                    size="small"
                                    color="secondary"
                                    variant="outlined"
                                    style={{ marginLeft: "5%", height: "80%" }}
                                >
                                    Assign
                </Button>
                            </div>
                        ))}
                </div>
                <Form.Row className="row" style={{ width: "100%", height: "9%" }}>
                    <button onClick={test}>TEST</button>
                </Form.Row>
            </div>
        </div>
    );
}
