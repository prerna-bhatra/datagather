import React, { useState,useEffect} from "react";
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import  './land.css';
import data from  './images/data.jpeg';
import edit from  './images/edit.jpg';
import payment from  './images/payment.jpg';
import  presentfunction from  './images/fun.jpg';
import firebase from './firebase';

import axios from 'axios';

function LandingPage() {

	const user = useSelector(state => state.user)
    const [email, setEmail] = useState('');



    const [googleuser, setGoogleuser] = React.useState({});

    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            console.log(res.user.email)
            setEmail(res.user.email)

            fetch('http://localhost:5000/api/google/addsubscribe', {
                        method:'POST',
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email:res.user.email,
                            userid:user.userData._id
                        })
                    })
                    .then(result => {
                        result.json().then(response => {
                        console.log(response)
                        window.location.reload(false);
                       
                    })
                }).catch(err => {
                    alert("Something went wrong")
                });  
            
          })

        .catch((error) => {
            console.log(error.message)
          })
}
  

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
     		<div onClick={signInWithGoogle} className="btn btn-success" >New</div>
     	</div>
     	<div>
     		
     	</div>
     </div>
    )
  }
}

export default LandingPage


