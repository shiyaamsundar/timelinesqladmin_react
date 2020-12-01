import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Nav';



const InternPerformance=()=> {
    const [intern,setintern]=useState({

        firstname:"",
        lastname:"",
        phone:"",
        college:"",
        address:"",
        email:"",
        project:[],
        pcomp:"",
        ppend:"",
        ptot:"",
        task:[],
        tcomp:"",
        tpend:"",
        ttot:"",
        hrs:"",
        period:"",
        uid:"",
        loaded:"false",
});
    return (
        <div>
            <Nav/>
            <Sidediv>
        <div className="container col card">

        <span className="pt-5 pl-2 "></span>
        <button className="btn btn-primary">
        <i class="fa fa-user" aria-hidden="true"></i><span>Admin user Name</span></button>
        <div className="pt-4 pl-3">
        <StyledI>
        <Link to="/addproject"> <div className="row container pt-2"> <i class="fa fa-plus" aria-hidden="true"/><h5>
            Create Project</h5></div></Link>
            <Link to="/addintern"><div className="row container pt-4"> <i class="fa fa-id-badge" aria-hidden="true"/><h5>Create Intern</h5></div></Link>
           
            <Link to="/issue"> <div className="row container pt-4" ><i class="fa fa-bug" aria-hidden="true"/><h5>View Issue</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-file-o" aria-hidden="true"/><h5>Code</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-cog" aria-hidden="true"/><h5>Project Settings</h5></div></Link>
            </StyledI>
        </div>


            
        </div></Sidediv>
        <Maindiv>
        <div className="db pt-5">
    
    <div className="container  userdashboard pb-5">
    <div className="row">    
    <h3 className="mgbt-xs-15 mgtp-10 font-semibold col">
    <i className="fa fa-user-circle pl-5 pt-5">Intern DashBoard </i>
    </h3>
<p className="col pt-5"><h5 className="col">id:-</h5><h6 className="col">{intern.uid}</h6></p>
    </div>
    <hr/>
    <div className="row pt-5 line">
    <li className="list-group-item col">   
                        <span className="badge bagde-success">First Name:</span>
<span className="det1">{intern.firstname}</span>
                    </li>
                    <li className="list-group-item col">   
                        <span className="badge bagde-success">Last Name:</span>
<span className="det1">{intern.lastname}</span>
                    </li>
    </div>
    
    <div className="row pt-3 line">
    <li className="list-group-item col">   
                        <span className="badge bagde-success fa fa-envelope">Email:</span>
<span className="det1">abcd@gmail.com</span>
                    </li>
                    <li className="list-group-item col">   
                        <span className="badge bagde-success fa fa-phone">Phone:</span>
<span className="det1">{intern.phone}</span>
                    </li>
    </div>
    <div className="row pt-3 line">
    <li className="list-group-item col">   
                        <span className="badge fa fa-address-card">Address:</span>
<span className="det1">{intern.address}</span>
                    </li>
    </div>
    <div className="row pt-3 line">
    <li className="list-group-item col">   
        <span className="badge bagde-success fa fa-graduation-cap">College:</span>
<span className="det1">{intern.college}</span>
                    </li>
    </div>
    <div className="row pt-3 line">
    <div className="col">
    <h5 className="pl-3 pb-3">Projects</h5>
    
    {/* {intern.project.length>0 &&
    <ul>
    
    
    {intern.project.map((p,idx)=>{
            return( <li className="lst">{project[idx]}</li>
        )})}


</ul>} */}
    </div>
    <div className="col">
    <h5 className="pl-3 pb-3">Tasks</h5>
    {/* {intern.task.length>0 &&
    <ul>
    
    
    {intern.task.map((p,idx)=>{
            return( <li className="lst">{task[idx]}</li>
        )})}


</ul>} */}
    </div>
    </div>
    <div className="row pt-5 line">
    <li className="list-group-item col">   
                        <span className="badge bagde-success fa fa-check">Project Completed:</span>
            <span className="badge badge-primary badge-pill">{intern.pcomp}</span>
                    </li>
                    <li className="list-group-item col">   
                        <span className="badge bagde-success fa fa-exclamation-triangle">Projects Left:</span>
            <span className="badge badge-primary badge-pill">{intern.ppend}</span>
                    </li>
    </div>  


    <div class="row progress pt-5 pb-5 ">
    <div className="progress col pl-5">
<div className="progress-bar bg-success " role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.pcomp*10+20}%`}}>
{intern.pcomp*10}% Completed 
</div>
</div>
<div className="pl-5 pr-5"></div>
<div className="progress col">
<div className="progress-bar bg-danger" role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.ppend*10+20}%`}}>
{intern.ppend*10}% left 
</div>
</div>
</div>
    <div className="row pt-3 line">
    <li className="list-group-item col">   
                        <span className="badge bagde-success fa fa-check">Task Completed:</span>
            <span className="badge badge-primary badge-pill">{intern.tcomp}</span>
                    </li>
                    <li className="list-group-item col">   
                        <span className="badge bagde-success fa fa-exclamation-triangle">Task Left:</span>
            <span className="badge badge-primary badge-pill">{intern.tpend}</span>
                    </li>
    </div>   
    <div class="row progress pt-5 pb-5">
    <div className="progress col pl-5">
<div className="progress-bar bg-success" role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.tcomp*10+20}%`}}>
{intern.tcomp*10}% Complete 
</div>
</div>
<div className="pl-5 pr-5"></div>
<div className="progress col">
<div className="progress-bar bg-danger" role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.tpend*10+20}%`}}>
{intern.tpend*10}% Left
</div>
</div>


</div>         
<div className="row pt-3 line">
    <li className="list-group-item col">   
                        <span className="badge  fa fa-clock-o">Total Worked Hours:</span>
            <span className="badge badge-primary badge-pill ">{intern.hrs}</span>
                        <span className="det">Hours</span>
                    </li>
    </div>
    </div>
</div>
</Maindiv>
        </div>

    )
}

const Maindiv=styled.div`
padding-left:300px;
padding-top:50px;


`;


const StyledI=styled.div`
i{
    color:black;
}

`;

const Sidediv=styled.div`
width:15rem;
height:100%;
position:absolute;

.card{
height:100%;


}
h5{
    color:black;
    font-size:large;
}
i{
    padding-right:15px;
    padding-top:4px;
    
}

button{
    i{
        font-weight:500;
    }
    span{
        font-weight:600;
    }
}


`;


export default InternPerformance
