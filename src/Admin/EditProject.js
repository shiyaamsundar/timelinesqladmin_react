import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Nav'
import { admingetproject } from './Apis'


const EditProject=({match}) =>{
  const {pathname}=useLocation();

  const [values,setvalues]=useState({
    title: "",
    description: "",
    createdby: "",
    assignedto: "",
    estimation: "",
    status: "",

  })
  const [result,setresult]=useState({
    error:false,
    success:"",
  })
  
  const {error,success}=result;
  const {title,description,createdby,assignedto,estimation,status}=values;

  const handlechange=name=>event=>{
    setvalues({...values,[name]:event.target.value})
}

const preload=()=>{
    admingetproject(match.params.id).then(data=>{
      console.log(data)
        setvalues({...values,
        title:data.title,
        description:data.description,
        assignedto:data.assignedto,
        estimation:data.estimation,
        assignedto:data.assignedto,
        status:data.status
        
        })
    }).catch(err=>console.log(err))

}

console.log(values)

useEffect(()=>{
preload()

},[
  pathname==='/project/editproject/:id'
])




    return (
        <div>
        <Nav/>            
            <div className="container pt-5">
            <h1 class="display-4 pb-5">Edit Project</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>Title</label>
      <input type="text" className="form-control"  onChange={handlechange("title")} autoFocus required  value={title}/>
    </div>

    <div class="form-group col-md-6">
      <label>Assigned to</label>
      <input type="email" className="form-control" onChange={handlechange("assignedto")} autoFocus required  value={assignedto}/>
    </div>

    <div class="form-group col-md-6">
      <label>Created By</label>
      <input type="email" className="form-control"  onChange={handlechange("createdby")} autoFocus required  value={createdby}/>
    </div>
    <div class="form-group col-md-6">
      <label>Estimation</label>
      <input type="text" className="form-control"  onChange={handlechange("estimation")} autoFocus required  value={estimation}/>
    </div>
    <div class="form-group col-12">
      <label>Description</label>
      <input type="text" className="form-control"  onChange={handlechange("description")} autoFocus required  value={description}/>
    </div>
    <label className="pt-3">select status:</label>
    <div className="pl-5 pt-3">
    <select className="row">
    <option value="not completed" onChange={handlechange("status")}>TO-DO</option>
    <option value="in progress">IN-Progress</option>
    <option value="completed">Completed</option>
      </select></div>
    <span className="pt-5 pl-5"></span>

    <button className="btn btn-success p-2">Save Changes</button>
    </div>
    </div>            
        </div>

    )
}

export default EditProject
