import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import { addadmin, adminaddtask, admingetproject } from './Apis'


const  Addtask=(data)=> {
  const [values, setValues] = useState({

      title: "",
      description: "",
      createdby: "",
      assignedto: "",
      estimation: "",
      status: "not completed",
      adminId: 1,
      projectId:2,
})

const [result,setresult]=useState({
  error:false,
  success:"",
})






  const {error,success}=result;
  const {title,description,createdby,assignedto,estimation,status,adminId,projectId}=values;

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
const onsubmit=event =>{
  event.preventDefault();
  setValues({...values})
  setresult({...result,error:false,success:"true"}) 
  
  adminaddtask(values.projectId,values)

  
  .then(data=>{
    setValues({...values,
      title: "",
      description: "",
      createdby: "",
      assignedto: "",
      estimation: "",
      status: "not completed",
      adminId: 1,
      projectId:2,
    
    })

  }).catch(err=>console.log(err))
}


    return (
        <div>
            <Nav/>
            {successmessgae}

            <div className="container pt-5">
            <h1 class="display-4 pb-5">ADD TASK</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>Title</label>
      <input type="text" className="form-control" onChange={handlechange("title")} autoFocus required placeholder="Task Title" value={title}/>
    </div>

    <div class="form-group col-md-6">
      <label>Assigned to</label>
      <input type="email" className="form-control" onChange={handlechange("assignedto")} autoFocus required placeholder="Assigning To" value={assignedto}/>
    </div>
    <div class="form-group col-md-6">
      <label>Project Id</label>
      <input type="text" className="form-control" onChange={handlechange("projectId")} autoFocus required placeholder="Project Id" value={projectId}/>
    </div>
    <div class="form-group col-md-6">
      <label>Created By</label>
      <input type="email" className="form-control" onChange={handlechange("createdby")} autoFocus required placeholder="Created BY" value={createdby}/>
    </div>
    <div class="form-group col-10">
      <label>Description</label>
      <input type="text" className="form-control" onChange={handlechange("description")} autoFocus required placeholder="Description" value={description}/>
    </div>
    <div class="form-group col-2">
      <label>Estimation</label>
      <input type="text" className="form-control" onChange={handlechange("estimation")} autoFocus required placeholder="Estimation" value={estimation}/>
    </div>

    <span className="pt-5"></span>
    <button className="btn btn-primary p-2" onClick={onsubmit}> Add Task</button>
    </div>
    </div>            
        </div>
    )
}

export default Addtask
