import React from 'react'
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import  './land.css';
function LandingPage() {

	const user = useSelector(state => state.user)
    if (user.userData && !user.userData.isAuth) {
    return (
     <div id="beforelogin">
     	<center><h1>Welcome to the DATAGATHER</h1></center>
     	<div>
	     	<div>
	     		<img src=""></img>
	     	</div>
	     	<div>
	     	</div>
     	</div>
     
     </div>
    )
  } else {
    return (
     <div id="afterlogin">
     	<div style={{float:'right'}}>
     		<a href="/api/google/auth/google">New</a>
     	</div>
     	<div>
     		
     	</div>
     </div>
    )
  }
}

export default LandingPage
