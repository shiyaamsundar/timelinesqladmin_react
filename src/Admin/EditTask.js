import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../Nav'
import { adminupdatetask,admingettask } from './Apis'
import { useAuth0 } from "@auth0/auth0-react";


const EditTask=({match})=> {
  const {pathname}=useLocation();
  const { user, isAuthenticated,loginWithRedirect } = useAuth0();

  const [values, setvalues] = useState({

    title: "",
    description: "",
    createdby: user.name,
    assignedto: "",
    estimation: "",
    projectId:"",
    status: "",
    adminId: window.$id,
    projectId:0,
    id:0
})

const [result,setresult]=useState({
error:false,
success:"",
})


const preload=()=>{
  admingettask(match.params.id).then(data=>{
      setvalues({...values,
      title:data.title,
      description:data.description,
      assignedto:data.assignedto,
      estimation:data.estimation,
      assignedto:data.assignedto,
      status:data.status,
      projectId:data.projectId,
      createdby:data.createdby,
      id:data.id
      
      })
  }).catch(err=>console.log(err))

}

console.log(values)

useEffect(()=>{
preload()

},[
pathname==='/project/edittask/:id'
])







const {error,success}=result;
const {title,description,createdby,assignedto,estimation,status,adminId,projectId}=values;

const handlechange=name=>event=>{
  setvalues({...values,[name]:event.target.value})
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
setvalues({...values})
setresult({...result,error:false,success:"true"}) 

adminupdatetask(values.projectId,values)


.then(data=>{
  setvalues({...values,
    title: "",
    description: "",
    createdby: "",
    assignedto: "",
    estimation: "",
    status: "",
    adminId: "",
    projectId:"",
    id:0
  
  })

}).catch(err=>console.log(err))
}
return (
  <div>
      <Nav/>
      {successmessgae}

      <div className="container pt-5">
      <h1 class="display-4 pb-5">Edit TASK</h1>
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
<label className="pt-3">select status:</label>
    <div className="pl-5 pt-3">
    <select className="row" onChange={handlechange("status")}>
    <option value="not completed" onChange={handlechange("status")}>TO-DO</option>
    <option value="in progress" onChange={handlechange("status")}>IN-Progress</option>
    <option value="completed" onChange={handlechange("status")}>Completed</option>
      </select></div>
<span className=" pl-5 pt-5"></span>
<button className="btn btn-success p-2" onClick={onsubmit}> Save changes</button>
</div>
</div>            
  </div>
)
}

export default EditTask
