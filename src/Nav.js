import { motion } from 'framer-motion'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";


const Nav=()=> {

    const { user, isAuthenticated,loginWithRedirect,logout} = useAuth0();

    const {pathname}=useLocation();
    
    return (

        <StykledNav>
        <h1>
            <Link id="logo" to="/">
            <i className="fa fa-rocket" aria-hidden="true"/>TimeLine Software</Link></h1>
        <ul>
            <li>
                <Link to="/dashboard">Admin Dashboard</Link>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/dashboard'?'50%':'0%'}}/>
            </li>
            <li>
                <Link to="/project">Project</Link>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/project' ?'50%':'0%'}}/>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/project/viewproject' ?'50%':'0%'}}/>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/project/addtask' ?'50%':'0%'}}/>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/project/issue' ?'50%':'0%'}}/>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/project/editprogress' ?'50%':'0%'}}/>

            </li>

            {!isAuthenticated&& (
            <li>
                <Link onClick={()=>loginWithRedirect()}>Signup/signin</Link>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/signup'?'50%':'0%'}}/>
            </li>
            )}
            {isAuthenticated&& (
            <li>
                <Link onClick={() => logout()}>Logout</Link>
                <Line transition={{duration:0.75}} initial={{width:"0%"}} animate={{width:pathname==='/logout'?'50%':'0%'}}/>
            </li>
            )}

        </ul>
        
    </StykledNav>

    )
}

const Line=styled(motion.div)`
height:0.3rem;
background:#23d997;
width:5%;
position:absolute;
bottom:-80%;
@media (max-width:1300px){
    left:0%
}

`;


const StykledNav=styled.nav`
font-weight:500;
font-size:1.1rem;
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
padding:1rem 8rem;
align-items:center;
background:#282828;
position:sticky;
top:0;
z-index:10;
i{
    padding-right:10px;
}
a{
    color:white;
    text-decoration:none;
}
ul{
    display:flex;
    list-style:none;
}
#logo{
    font-size:1.5rem;
    font-weight:lighter;
}
li{
    padding-left:10rem;
    position:relative;
}

@media (max-width:1300px){
   
    flex-direction:column;
    padding:2rem 1rem;
    #logo{
        margin:2rem;
        display:inline-block;
    }
    ul{
        padding:2rem;
        justify-content:space-around;
        width:100%;
        li{
            padding:0px;
        }
    }
};



`;

export default Nav
