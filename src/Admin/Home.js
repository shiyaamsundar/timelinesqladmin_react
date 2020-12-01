import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav'
import { useAuth0 } from "@auth0/auth0-react";

const Home=()=> {
    const { user, isAuthenticated,loginWithRedirect} = useAuth0();
    console.log(user)
    return (
        <StyledDiv>
            <Nav/>

            <StyledImage>
            <img  src="https://wac-cdn.atlassian.com/dam/jcr:b86a32cb-0aa8-4783-aa81-9592d4fbf829/jsw-header-illustrations---v3.png?cdnVersion=1342"/>
            </StyledImage>
            
            {!isAuthenticated&&(<>
            <h2>The software development tool</h2><br/><h3> used by agile teams</h3>
            </>)}
            {isAuthenticated&&(<>
                <h2>Welcome <br/>{user.name}</h2>
                <br/>
                <StyledGImg>
                <img src={user.picture}/></StyledGImg></>
            )}
 
            {isAuthenticated&&(
                <Styledblock>
<Link className="card-link text-block btn " to="/dashboard">
            click_here<br/>
            <p className="fa fa-arrow-right arrow">
            
            </p>           </Link> </Styledblock>)}

            {!isAuthenticated&&(
                <Styledblock>
            <Link className="card-link  text-block btn " onClick={()=>loginWithRedirect()}>
            Sign_up/in<br/>
            <p className="fa fa-arrow-right arrow">
            
            </p></Link></Styledblock>)}
            
        </StyledDiv>
    )
}


const Styledblock=styled.div`
.text-block{
    font-weight:600;
position: absolute;
  bottom: 130px;
  right: 150px;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  background-color:blue;
  height:60px;
  &:hover{
    background-color:orange;
  };
}

  
`;

const StyledDiv=styled.div`
h2{

position: absolute;
  bottom: 500px;
  right: 160px;
  top:350px;
}
h3{
    position: absolute;
  bottom: 450px;
  right: 150px;
  top:400px;

}


`;

const StyledGImg=styled.div`
img{
    position: absolute;
  bottom: 450px;
  right: 180px;
  top:450px;
  border-radius:50%;

}

`;
const StyledImage=styled.div`
img{
width:65%;
}
`;



export default Home
