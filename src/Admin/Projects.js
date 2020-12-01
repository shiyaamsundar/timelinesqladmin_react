import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav'


const Projects=()=> {

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
                    <h5 className="pl-2">Project Name</h5>
                </div>

                <div className="row pl-2">
                    <span>Assigned to:</span>user
                </div>
                <div className="row pl-2">
                    <span>Description:</span>admin
                </div>

                <div className="row pl-2">
                <span>No of task:</span>0
                </div>
                <div className="row pl-2">
                <span>task left:</span>0
                </div>
                <div className="row pl-2">
                    <span>task completed:</span>0
                </div>
                <div className="row pl-2">
                <span>Status:</span>InCompleted<i className="fa fa-circle pt-1 pl-2" aria-hidden="true" style={{color:"green"}}></i>
                </div>

                <div className="row pt-2 pl-3">
          <Link to="/project/viewproject">  <button className="btn btn-primary rounded">View Project</button></Link><span className="p-1"></span><button className="btn btn-success rounded">Finish Project </button>    
            </div>   

            </div>
            
        </div>

        </div>
        </Carddiv>
      
        )
    }




    return (
        <ProjectDIv>
        <Nav/>
        
        <div className="row p-5 ">
            <CArd/>
            <CArd/>
            <CArd/>
            <CArd/>
            <CArd/>
            <CArd/>
            <CArd/>
 



        </div>
        </ProjectDIv>
    )
}



const Carddiv=styled.div`

flex-direction:column;
display:flex;

box-sizing:border-box;
border-radius:1px;

width:31.5rem;
padding-right:10px;
padding-left:5px;
`;

const ProjectDIv=styled.div`
span{
    font-weight:500;
    padding-right:5px;
}


`;

const Styledcol=styled.div`
background-color:grey;
height:11rem;
width:8px;
padding-left:12px;

`;

export default Projects
