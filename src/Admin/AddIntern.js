import React, { useState } from 'react'
import Nav from '../Nav'
import { adminaddintern } from './Apis'
import { useAuth0 } from "@auth0/auth0-react";


const AddIntern=()=> {
  const { user} = useAuth0();
  const [values, setValues] = useState({
    
      fname: "",
      lname: "",
      email: "",
      address: "",
      phone: "",
      college: "",
      intern_period: "",
      adminId: window.$id
    
})

const {fname,lname,email,address,phone,intern_period,college,adminId}=values;

const handlechange=name=>event=>{
  setValues({...values,[name]:event.target.value})
}

const onsubmit=event=>{
  event.preventDefault();

  adminaddintern(values).then(data=>{
    setValues({...values,
      fname: "",
      lname: "",
      email: "",
      address: "",
      phone: "",
      college: "",
      intern_period: "",
      adminId: window.$id})
  }).catch(err=>console.log(err))


}
  return (
        <div>
        <Nav/>            
            <div className="container pt-5">
            <h1 class="display-4 pb-5">ADD Intern</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>First-name</label>
      <input type="text" className="form-control" onChange={handlechange("fname")} autoFocus required placeholder="First Name" value={fname}/>
    </div>

    <div class="form-group col-md-6">
      <label>Last-Name</label>
      <input type="text" className="form-control" onChange={handlechange("lname")} autoFocus required placeholder="Last Name" value={lname}/>
    </div>

    <div class="form-group col-md-6">
      <label>Email</label>
      <input type="email" className="form-control"  onChange={handlechange("email")} autoFocus required placeholder="Email" value={email}/>
    </div>


    <div class="form-group col-md-6">
      <label>Phone</label>
      <input type="text" className="form-control"  onChange={handlechange("phone")} autoFocus required placeholder="Phone" value={phone}/>
    </div>
    <div class="form-group col-md-6">
      <label>College</label>
      <input type="text" className="form-control"  onChange={handlechange("college")} autoFocus required placeholder="College Name" value={college}/>
    </div>

    <div class="form-group col-md-6">
      <label>Intern Period</label>
      <input type="text" className="form-control"  onChange={handlechange("intern_period")} autoFocus required placeholder="Intern period" value={intern_period}/>
    </div>
    <div class="form-group col-md-12">
      <label>Address</label>
      <input type="text" className="form-control"  onChange={handlechange("address")} autoFocus required placeholder="Address" value={address}/>
    </div>
    
    <span className="pt-5"></span>
    <button className="btn btn-primary p-2" onClick={onsubmit}> Add Intern</button>
    </div>
    </div>            
        </div>

    )
    
}

export default AddIntern
