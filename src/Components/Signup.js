import React from 'react'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import database from './FirebaseConfiguration';
import {createUserWithEmailAndPassword}  from 'firebase/auth';

function Signup() {

  const navigate=useNavigate();

  const initialState={
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
};

const [user,setUser]=useState(initialState);

function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value});
}

 const  handleSubmit=async (e)=>{
  console.log(user);
  
    e.preventDefault();
    const {name,email,phone,work,password,cpassword}=user;
    createUserWithEmailAndPassword(database,email,password).then(data=>{console.log(data,"authData")
    navigate("/signin");
  })
   
    // const res= await fetch('/signup',{
    //   method:"POST",
    //   headers:{
    //     "content-Type" : "application/json"
    //   },
    //   body: JSON.stringify({
    //     name,email,work,phone,password,cpassword
    //   })
    // });
    
    // const data= await res.json();
    
    // if(data.status===422 || !data){
    //   console.log({data});
    //   console.alert({data});
    // }else if(data.status===500){
    //   console.log({data});
    //   console.alert({data});
    // }
    // else{
    //   window.alert("Registration Sussfully");
    //   console.log("Registration Sussfully");
      
    // }

    

}


  return (
    <>
      <div className="register-photo">
        <div className="form-container">
            <div className="image-holder"></div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2 className="text-center"><strong>Create</strong> an account.</h2>
                <div className="form-group"><input className="form-control" type="text" name="name" value={user.name} onChange={(e)=>handleChange(e)} placeholder="Name"/></div>
                <div className="form-group"><input className="form-control" type="email" name="email" value={user.email} onChange={(e)=>handleChange(e)} placeholder="Email"/></div>
                <div className="form-group"><input className="form-control" type="text" name="phone" value={user.phone} onChange={(e)=>handleChange(e)} placeholder="Phone Number"/></div>
                <div className="form-group"><input className="form-control" type="text" name="work" value={user.work} onChange={(e)=>handleChange(e)} placeholder="Work"/></div>
                <div className="form-group"><input className="form-control" type="password" name="password" value={user.password} onChange={(e)=>handleChange(e)} placeholder="Password"/></div>
                <div className="form-group"><input className="form-control" type="password" name="cpassword" value={user.cpassword} onChange={(e)=>handleChange(e)} placeholder="Password (repeat)"/></div>
                
                <div className="form-group">
                    <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox"/>I agree to the license terms.</label></div>
                </div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                </div><Link to="/signin" className="already">You already have an account? Login here.</Link></form>
        </div>
    </div>
    </>
  )
}

export default Signup;
