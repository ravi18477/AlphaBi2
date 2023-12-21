import React, { useEffect, useState} from 'react';
import profimg from '../images/profimg.jpg';
import profile2 from '../images/profile2.webp'
import { useNavigate } from 'react-router-dom';

function About() {
  
  const [userdata,setUserData]=useState({});
  const navigate=useNavigate();

  

   useEffect(() => {
    
    const callAboutpage =async ()=>{
      try{
            const resp =await fetch('/about',{
              method:'GET',
              headers:{
                Accept:"application/json",
                "Content-Type": "application/json"
              },
              credentials:'include'
            })
            const data = await resp.json();
            console.log(data);
            setUserData(data);
  
            if(!resp.status=== 200){
               const error = new Error(resp.error);
               throw error;
            }
      }catch(err){
          console.log(err);
          navigate("/signin");
      }
     };
  
    callAboutpage();
  }, [ navigate]);
  return (
    <div className="col-lg-8 offset-lg-2 col-sm-10 offset-sm-1 mt-5 p-5 " >
    <form action="GET" style={{"width":"100%"}}>
       <div className="card">
        <div className="container">
       <div  className="row">
        
              <div className="col-sm-4">
                <img className='profimg' src={userdata.email==="ravib18477@gmail.com"? profimg:profile2 } alt="" />
                <p><b>Work</b></p>
                <a href='https://github.com/ravi18477' target='_ravi' style={{"textDecoration":"none","color":"black"}}><p>Youtube</p></a>
                <a href='https://github.com/ravi18477' target='_ravi' style={{"textDecoration":"none","color":"black"}}><p>Home</p></a>
                <a href='https://github.com/ravi18477' target='_ravi' style={{"textDecoration":"none","color":"black"}}><p>Web development</p></a>
                <a href='https://github.com/ravi18477' target='_ravi' style={{"textDecoration":"none","color":"black"}}><p>Software Engineer</p></a>
                <a href='https://github.com/ravi18477' target='_ravi' style={{"textDecoration":"none","color":"black"}}><p>Backend Developer</p></a>
                <a href='https://github.com/ravi18477' target='_ravi' style={{"textDecoration":"none","color":"black"}}><p>Instagram</p></a>
              </div>
              <div className="col-sm-5">
                   <h5>{userdata.name}</h5>
                   <br />
                   <h6>{userdata.work}</h6>
                   <p className="profile-rating mt-3 mb-5">RANKINGS: <span>8/10</span></p>

                   <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                       </li>
                       <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Timeline</button>
                        </li>
  
                   </ul>
                      
                      <div className="about-info">
                        <div className='tab-content profile-tab' id='myTabContent'>
                          <div className=" tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab'>
                              <div className='about-profile'>
                               <div className="about-profile-content-1" style={{"fontWeight":"600"}}>
                                    <label htmlFor=""><p>User id</p></label><br />
                                    <label htmlFor=""><p>Name</p></label><br />
                                    <label htmlFor=""><p>Email</p></label><br />
                                    <label htmlFor=""><p>Phone</p></label><br />
                                    <label htmlFor=""><p>Profession</p></label><br />
                                    
                               </div>
                               <div className='about-profile-content-2' style={{"color":"blue","fontWeight":"500"}}>
                                      <p>{userdata._id}</p>
                                      <p>{userdata.name}</p>
                                      <p>{userdata.email}</p>
                                      <p>{userdata.phone}</p>
                                      <p>{userdata.work}</p>
                                      

                               </div>
                               </div>
                                
                          </div>
                          <div className="  tab-pane fade" id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                          <div className='about-profile'>
                               <div className="about-profile-content-1" style={{"fontWeight":"600"}}>
                                    <label htmlFor=""><p>Exprience</p></label><br />
                                    <label htmlFor=""><p>Hourly Rate</p></label><br />
                                    <label htmlFor=""><p>Total Projects </p></label><br />
                                    <label htmlFor=""><p>English Level</p></label><br />
                                    <label htmlFor=""><p>Availability</p></label><br />
                                    
                               </div>
                               <div className='about-profile-content-2' style={{"color":"blue","fontWeight":"500"}}>
                                      <p>Expert</p>
                                      <p>$101.5</p>
                                      <p>10</p>
                                      <p>Expert</p>
                                      <p>4 Weeks</p>
                                      

                               </div>
                               </div>
                          </div>
                        </div>
                      </div>



              </div>
              <div className="col-sm-2">
                <input type="submit" className='edit-profile-btn' name='btnaddmore' value={"Edit Profile"} />
              </div>
         

       </div>
       </div>
</div>
</form>
    </div>
  )
}

export default About
