import React, { useState,useEffect} from "react";
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import  './land.css';
import data from  './images/data.jpeg';
import edit from  './images/edit.jpg';
import payment from  './images/payment.jpg';
import  presentfunction from  './images/fun.jpg';
import axios from 'axios';
function LandingPage() {

	const user = useSelector(state => state.user)
    const [googleuser, setGoogleuser] = React.useState({});
  

    if (user.userData && !user.userData.isAuth) {
    return (
     <div id="beforelogin">
     	<center><h1>Welcome to the DATAGATHER</h1></center>
       <center> <h3>Features</h3></center>
     	<div id="subsimg" className="row">
	     	<div className="col-md-3">
	     		<img src={payment}></img>
                <center><h6>Easy payment Tracing</h6></center>
	     	</div>
	     	<div className="col-md-3">
                <img src={data}></img>
                    <center><h6>Graphical reprsetation of data</h6></center>
            </div>
            <div className="col-md-3">
                <img src={edit}></img>
                    <center><h6>Edit Data</h6></center>
            </div>
            <div className="col-md-3">
                <img src={presentfunction}></img>
                <center><h6>Use functions</h6></center>
            </div>
     	</div>
     
     </div>
    )
  } else {
       return (
     <div id="afterlogin">
     	<div style={{float:'right'}}>
     		<a className="btn btn-success" href="/api/google/auth/google">New</a>
     	</div>
     	<div>
     		
     	</div>
     </div>
    )
  }
}

export default LandingPage


