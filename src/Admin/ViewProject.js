import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav'



const ViewProject=({match})=> {
    const {pathname}=useLocation();
    const [internproject,setinternproject]=useState({
        allinternproject:[],
        loading:true
    })
    
    const loadinternproject=()=>{
        // allinternproject(match.params.).then(data=>{
        //     if(data)
        //     {
        //         setintern({...intern,allintern:data,loading:false}) 
            
        //     }
        // })
     
    }
    console.log("match",match)
    
    
    
    useEffect(()=>{
        loadinternproject()
    },[pathname==='/internproject/:id'])
    
    
    
    
    

    


    const CArd=()=>{
        

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
                    <h5 className="pl-2">Task title</h5>
                </div>
                <div className="row pl-2">
                    <span>assigned-to:</span>user
                </div>
                <div className="row pl-2">
                <span>task descritpin:</span>0
 
                </div>

                <div className="row pl-2">
                <span>Status:</span>InCompleted<i className="fa fa-circle pt-1 pl-2" aria-hidden="true" style={{color:"green"}}></i>
                </div>

                <div className="row pt-3 pl-4">
            <Link to="/project/edittask"><button className="btn btn-primary rounded">Edit-Task</button></Link>    
            </div>   
            <div className="pt-3 pl-2">
            <button className="btn btn-success rounded">Finish Task </button></div>
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
        <Link to="/project/editproject">
        <button className="btn btn-primary">
          
        <i class="fa fa-free-code-camp pr-3" aria-hidden="true"/><span>project title</span></button></Link>
        <div className="pt-4 pl-3">
        <StyledI>
        <Link to="/project/addtask"> <div className="row container pt-2"> <i class="fa fa-plus" aria-hidden="true"/><h5>
            Add Task</h5></div></Link>
            <Link to="/project/issue"> <div className="row container pt-4" ><i class="fa fa-bug" aria-hidden="true"/><h5>Raise Issue</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-code" aria-hidden="true"/><h5>Components</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-file-o" aria-hidden="true"/><h5>Code</h5></div></Link>
            <Link><div className="row container pt-4"><i class="fa fa-cog" aria-hidden="true"/><h5>Project Settings</h5></div></Link>
            </StyledI>
        </div>


            
        </div></Sidediv>
        <Maindiv>
        <h3 class="display-6 pl-5 pt-3">Intern Project</h3>
        <div className="row">

        <TODOdiv>TO DO</TODOdiv>
        <TODOdiv2> <span className="pl-5">In-Progress</span></TODOdiv2>
        <TODOdiv3> <span className="pl-5">Completed</span></TODOdiv3>
        </div>
        <div className="row">
            <div className="pt-5 pl-5 col"><CArd/><CArd/><CArd/></div>
            <div className="pt-5 col"><CArd/><CArd/><CArd/></div>
            <div className="pt-5  col"><CArd/><CArd/><CArd/></div>

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
    width:18rem;
    height:18rem;
}


`;







export default ViewProject
