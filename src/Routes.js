import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddIntern from './Admin/AddIntern';
import AddProject from './Admin/AddProject';
import Addtask from './Admin/Addtask';
import Dashboard from './Admin/Dashboard';
import EditProject from './Admin/EditProject';
import EditTask from './Admin/EditTask';
import Home from './Admin/Home';
import InternPerformance from './Admin/InternPerformance';
import InternProjects from './Admin/InternProjects';
import InternTask from './Admin/InternTask';
import Projects from './Admin/Projects';
import ViewProject from './Admin/ViewProject';



function Routes() {

    
    return (
       <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/internproject/:id"  component={InternProjects}></Route>
        <Route path="/interntask/:id" exact component={InternTask}></Route>
        <Route path="/performance/:id" exact component={InternPerformance}></Route>
        <Route path="/project/addproject" exact component={AddProject}></Route>
        <Route path="/addintern" exact component={AddIntern}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/project" exact component={Projects}></Route>
        <Route path="/project/addtask" exact component={Addtask}></Route>  
        <Route path="/project/edittask/:id" exact component={EditTask}></Route>
        <Route path="/project/editproject/:id" exact component={EditProject}></Route>
        <Route path="/project/viewproject" exact component={ViewProject}></Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Routes
