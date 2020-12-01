import React from 'react'
import Nav from '../Nav'

const AddIntern=()=> {
    return (
        <div>
        <Nav/>            
            <div className="container pt-5">
            <h1 class="display-4 pb-5">ADD Intern</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>First-name</label>
      <input type="text" className="form-control"/>
    </div>

    <div class="form-group col-md-6">
      <label>Last-Name</label>
      <input type="text" className="form-control"/>
    </div>

    <div class="form-group col-md-6">
      <label>Email</label>
      <input type="email" className="form-control"/>
    </div>


    <div class="form-group col-md-6">
      <label>Phone</label>
      <input type="text" className="form-control"/>
    </div>
    <div class="form-group col-md-6">
      <label>College</label>
      <input type="text" className="form-control"/>
    </div>

    <div class="form-group col-md-6">
      <label>Intern Period</label>
      <input type="text" className="form-control"/>
    </div>
    <div class="form-group col-md-12">
      <label>Address</label>
      <input type="text" className="form-control"/>
    </div>
    
    <span className="pt-5"></span>
    <button className="btn btn-primary p-2"> Add Intern</button>
    </div>
    </div>            
        </div>

    )
    
}

export default AddIntern
