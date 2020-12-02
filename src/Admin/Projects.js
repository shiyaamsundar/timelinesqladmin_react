import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav'
import {adminallproject} from './Apis'
import { useAuth0 } from "@auth0/auth0-react";



const Projects=()=> {

    const { user, isAuthenticated,loginWithRedirect } = useAuth0();


    const {pathname}=useLocation();
    const [internproject,setinternproject]=useState({
        comp:[],
        prog:[],
        incomp:[],
        loading:true
    })





    const loadinternproject=()=>{
        adminallproject(window.$id).then(data=>{
            if(data)
            {
                setinternproject({...internproject,comp:data.comp,prog:data.prog,incomp:data.notcomp,loading:false}) 
                
            }
        })
        
     
    }
    


    
    
    
    useEffect(()=>{
        loadinternproject()
     
    },[
        pathname==='/internproject/:id'
    ])
    


    const CArd=(details)=>{

        return (
            <Carddiv>
                <div className="card ">
            <div className="container row p-5 rounded ">
            <Styledcol>
            <div className="col-1">
                
            </div>
            </Styledcol>
            <div   className="col-11">
                <div className="row">
        <h5 className="pl-2">{details.details.title}</h5>
                </div>
                <div className="row pl-2">
                    <span>assigned-to:</span>{details.details.assignedto}
                </div>
                <div className="row pl-2">
                <span>Project descritpin:</span>{details.details.description}
        
                </div>



                <div className="row pt-4 pl-4">
            <Link to={`/project/editproject/${details.details.id}`}><button className="btn btn-primary rounded">Edit-Project</button></Link>    
            </div>   
            <div className="pt-3 row pl-4">
                <Link to={`/interntask/${details.details.id}`}>
            <button className="btn btn-success rounded">View Tasks</button></Link></div>
           <div className='pt-2'></div>             


            </div>
            
        </div>

        </div>
        </Carddiv>
      
        )
    }




    return (
        <ViewProjectDiv>
            <Nav/>

        <Sidediv>
        <div className="container col card">

        
        <span className="pt-5 pl-2"></span>
        
        <button className="btn btn-primary">
          
        <i class="fa fa-user pr-3" aria-hidden="true"/>{user.name}<span></span></button>
        <div className="pt-4 pl-3">
        <StyledI>
        <Link to="/project/addproject"> <div className="row container pt-2"> <i class="fa fa-plus" aria-hidden="true"/><h5>
            Add Project</h5></div></Link>
            <Link to="/project/issue"> <div className="row container pt-4" ><i class="fa fa-bug" aria-hidden="true"/><h5>Raise Issue</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-code" aria-hidden="true"/><h5>Components</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-file-o" aria-hidden="true"/><h5>Code</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-cog" aria-hidden="true"/><h5>Project Settings</h5></div></Link>
            </StyledI>
        </div>


            
        </div></Sidediv>
        <Maindiv>
        <h3 class="display-6 pl-5 pt-3">Project TASK</h3>
        <div className="row">

        <TODOdiv>TO DO</TODOdiv>
        <TODOdiv2> <span className="pl-5">In-Progress</span></TODOdiv2>
        <TODOdiv3> <span className="pl-5">Completed</span></TODOdiv3>
        </div>
        {internproject.loading &&(
            <div className="d-flex justify-content-center pt-5">
         
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <div className="row">
            {internproject.incomp &&(

<div className="pt-5 pl-5 col">
  {internproject.incomp.map((t,idx)=>{
      return (
         <div key={idx}>
           <CArd details={t}/>
         </div>
       )
  })} 
</div>)}

{internproject.prog &&(

<div className="pt-5  col">
  {internproject.prog.map((t,idx)=>{
      return (
         <div key={idx}>
           <CArd details={t}/>
         </div>
       )
  })} 
</div>)}
{internproject.comp &&(

<div className="pt-5  col">
  {internproject.comp.map((t,idx)=>{
      return (
         <div key={idx}>
           <CArd details={t}/>
         </div>
       )
  })} 
</div>)}

        </div>

        </Maindiv>
        </ViewProjectDiv>
    )
}
const StyledI=styled.div`
i{
    color:black;
}

`;

const TODOdiv=styled.div`
padding-left:200px;
padding-top:5px;
i{
    background-color:green;
}

`;
const TODOdiv2=styled.div`
padding-left:280px;
padding-top:5px;
`;
const TODOdiv3=styled.div`
padding-left:380px;
padding-top:5px;
`;

const ViewProjectDiv=styled.div`
overflow:hidden;
`; 

const Styledcol=styled.div`
background-color:grey;
height:11rem;
width:8px;
padding-left:12px;

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

const Maindiv=styled.div`
 
width:100%;
position:inherit;
padding-left:13rem;

`;
const Carddiv=styled.div`

flex-direction:column;
display:flex;

box-sizing:border-box;
border-radius:1px;

width:20.5rem;

padding-right:5px;
padding-left:25px;
.card{
    width:25rem;
    height:18rem;
}


`;



export default Projects
