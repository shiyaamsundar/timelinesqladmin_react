import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav'
import { adminallintern, getadmin } from './Apis'
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard=({match})=> {
    const { user, isAuthenticated,loginWithRedirect } = useAuth0();

    const {pathname}=useLocation();
const [intern,setintern]=useState({
    allintern:[],
    loading:true
})

// const [value,setvalue]=useState({
//     adminid:"",
//     adminemail:""
// })
console.log(user)

let internloaded=false;



const loadintern=()=>{
    console.log('hello')
    adminallintern(window.$id).then(data=>{
        if(data)
        {
            setintern({...intern,allintern:data,loading:false})
             

        
        }

    })
}


console.log('intern',intern)
console.log(user.name)
    const preload=()=>{
        getadmin(user.name).then(data=>{
            if(data){
                window.$id=data[0].id
                loadintern()        
            }
        })
        

    }






useEffect(()=>{
    preload()
},[pathname==='/dashboard'])








    const CArd=(details)=>{

        return (
            <div>
          
                <ListRow>
<li className="list-group-item">name:{details.details.fname} <span className="pl-5 pr-5">email:{details.details.email} </span><span className="pl-5"><Link to={{pathname:`/performance/${details.details.id}`,aboutProps:{useremail:`${details.details.email}`}}}  >view intern performance</Link></span>
<span className="pl-5"><Link to={`/internproject/${details.details.id}`}>view intern projects</Link></span>
<span className="pl-5"><Link to={`/interntask/${details.details.id}`}>view intern tasks</Link></span></li>
</ListRow>

            </div>
      
        )
    }



    return (
        <div>
            <Nav/>
            <Sidediv>
        <div className="container col card">

        <span className="pt-5 pl-2 "></span>
        <button className="btn btn-primary">
        <i class="fa fa-user" aria-hidden="true"></i>{user.name}<span></span></button>
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
        <h1 class="display-4">All interns</h1>
        <div className="col pl-3">
            
        {!intern.loading &&(

        <div className="row">
          {intern.allintern.map((t,idx)=>{
              return (
                 <div key={idx}>
                   <CArd details={t}/>
                 </div>
               )
          })} 
        </div>)}
          </div>
            
        </Maindiv>


            
        </div>
    )
}

const ListRow=styled.div`
border-radius:10px;
box-shadow:1px;
width:70rem;
`;

const Interndiv=styled.div`
background-color:black;
display:flex;
width:50rem;
height:30px;
border-radius:25px;


`;

const Maindiv=styled.div`
padding-left:300px;
padding-top:50px;

`;



const Styledcol=styled.div`
background-color:grey;
height:5rem;
width:8px;
padding-left:12px;

`;


const Carddiv=styled.div`

flex-direction:column;
display:flex;

box-sizing:border-box;
border-radius:1px;

width:15.5rem;

padding-right:5px;
padding-left:5px;

.card{
    width:15.5rem;
    height:9rem;

}


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



export default Dashboard

