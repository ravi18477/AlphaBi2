import React, { useContext } from 'react';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import database from './FirebaseConfiguration';

import { UserContext } from '../App'; 

function Signin() {
  
  const {state,dispatch}=useContext(UserContext);


   const navigate=useNavigate();

  const initialState={
    email:"",
    
    password:"",
   
};

const [user,setUser]=useState(initialState);

function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value});
}

const handleSubmit= async(e)=>{
  console.log(user);
  e.preventDefault();

  const {email,password}=user;
  
  // const res= await fetch("/signin",{
  //   method:'POST',
  //   headers:{
  //     "content-Type" : "application/json"
  //   },
  //   body: JSON.stringify({
  //     email,password
  //   })
  // }) 

  // const data=await res.json();

  // if(res.status===200 || !data){
  //   dispatch({type:'USER',payload:true})
  //   window.alert("Login Successfully");
  //   navigate("/");
    
  // }else{
  //   window.alert("Invalid Credentials");
  // }


  signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          alert('user logged in')
          navigate('/');
        })
        .catch((err) => {
          alert(err.code);
        });
    }





  return (
    <>
      <div className="register-photo">
        <div className="form-container">
            <div className="image-holder"></div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2 className="text-center"><strong>Sign-in</strong> to your account.</h2>
                <div className="form-group"><input className="form-control" type="email" name="email" value={user.email} onChange={(e)=>handleChange(e)} placeholder="Email"/></div>
                
                <div className="form-group"><input className="form-control" type="password" name="password" value={user.password} onChange={(e)=>handleChange(e)} placeholder="Password"/></div>
                
                <div className="form-group">
                    <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox"/>I agree to the license terms.</label></div>
                </div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign in</button>
                </div><Link to="/signup" className="already">Don't have an account? Register here.</Link></form>
        </div>
    </div>
    </>
  )
}

export default Signin
