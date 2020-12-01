import React from 'react'
import Nav from '../Nav'


const AddProject=()=> {
    return (
        <div>
        <Nav/>            
            <div className="container pt-5">
            <h1 class="display-4 pb-5">ADD Project</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>Title</label>
      <input type="text" className="form-control"/>
    </div>

    <div class="form-group col-md-6">
      <label>Assigned to</label>
      <input type="email" className="form-control"/>
    </div>

    <div class="form-group col-md-6">
      <label>Created By</label>
      <input type="email" className="form-control"/>
    </div>
    <div class="form-group col-md-6">
      <label>Description</label>
      <input type="text" className="form-control"/>
    </div>
    <span className="pt-5"></span>
    <button className="btn btn-primary p-2"> Add Project</button>
    </div>
    </div>            
        </div>

    )
}

export default AddProject
