import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import {adminaddproject,} from './Apis'
import { useAuth0 } from "@auth0/auth0-react";

const  AddProject1=(data)=> {
  const { user, isAuthenticated,loginWithRedirect } = useAuth0();


  const [values, setValues] = useState({

      title: "",
      description: "",
      postedby: user.name,
      assignedto: "",
      estimation: 10,
      status: "not completed",
      adminId: window.$id,
      workedhours:0
})

const [result,setresult]=useState({
  error:false,
  success:"",
})




console.log("adminid:",window.$id)

  const {error,success}=result;
  const {title,description,postedby,assignedto,estimation,status,adminId,workedhours}=values;

  const handlechange=name=>event=>{
    setValues({...values,[name]:event.target.value})
}


const successmessgae=()=>{

  return (
<div className="alert alert-success mt-3" 
      style={{display:success?"":"none"}}            >
         Task has been Added Successfully by {title}  <Link to="/">Click here</Link> to go back Home
      </div> 
  )
}
console.log(values)
const onsubmit=event =>{
  event.preventDefault();
  setresult({...result,error:false,success:"true"}) 
  
  adminaddproject(values,values.adminId)

  
  .then(data=>{
    setValues({...values,
      title: "",
      description: "",
      postedby: "",
      assignedto: "",
      estimation: "",
      status: "",
      adminId:"",
    
    })

  }).catch(err=>console.log(err))
}


    return (
        <div>
            <Nav/>
            {successmessgae}

            <div className="container pt-5">
            <h1 class="display-4 pb-5">ADD Project</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>Title</label>
      <input type="text" className="form-control" onChange={handlechange("title")} autoFocus required placeholder="Project Title" value={title}/>
    </div>

    <div class="form-group col-md-6">
      <label>Assigned to</label>
      <input type="email" className="form-control" onChange={handlechange("assignedto")} autoFocus required placeholder="Assigning To-intern email" value={assignedto}/>
    </div>
    <div class="form-group col-md-6">
      <label>Admin Id</label>
      <input type="text" className="form-control" onChange={handlechange("adminId")} autoFocus required placeholder="Admin Id" value={adminId}/>
    </div>
    <div class="form-group col-md-6">
      <label>Created By</label>
      <input type="email" className="form-control" onChange={handlechange("postedby")} autoFocus required placeholder="Created BY-admin email" value={postedby}/>
    </div>
    <div class="form-group col-10">
      <label>Description</label>
      <input type="text" className="form-control" onChange={handlechange("description")} autoFocus required placeholder="Description" value={description}/>
    </div>
    <div class="form-group col-2">
      <label>Estimation</label>
      <input type="text" className="form-control" onChange={handlechange("estimation")} autoFocus required placeholder="Estimation-time" value={estimation}/>
    </div>

    <span className="pt-5"></span>
    <button className="btn btn-primary p-2" onClick={onsubmit}> Add Project</button>
    </div>
    </div>            
        </div>
    )
}

export default AddProject1
