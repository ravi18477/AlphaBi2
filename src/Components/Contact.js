import React, { useEffect, useState} from 'react';


function Contact() {

  const [userdata,setUserData]=useState({
    message:""
  });
  
  const [query,setquery]=useState({});
  
  
  //  useEffect(() => {
    
    // const callContactpage =async ()=>{
  //     try{
  //           const resp =await fetch('/getdata',{
  //             method:'GET',
  //             headers:{
            
  //               "Content-Type": "application/json"
  //             }
  //           })
  //           const data = await resp.json();
  //           console.log(data);
  //           setUserData({...userdata,name:data.name,email:data.email,phone:data.phone});
  //           setquery(data);
  
  //           if(!resp.status=== 200){
  //              const error = new Error(resp.error);
  //              throw error;
  //           }
  //     }catch(err){
  //         console.log(err);
        
  //     }
  //    };
  
  //   callContactpage();
  // },[]);

  
  
  
  function handleMessageChange(e){
    setUserData({...userdata,[e.target.name]:e.target.value});
  } 
  
   const handleSubmit= async (e)=>{
     e.preventDefault();

    //  const {name,email,phone,message}=userdata;

    //  const res=await fetch('/contact',{
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify({
    //     name,email,phone,message
    //   })
    //  });

    //  const data= await res.json();

    //  if(!data){
    //   alert("message not send");
    //  }else{
    //   alert("message send");
    //   setUserData({...userdata,message:""});
    //  }


   }
   

  return (
    <>
   <div className="contact">
       <div className="contact-info">

       <div className="card">
      <div className="card-body">
    <h5 className="card-title"> <i className="fas fa-phone-square-alt"></i> Phone</h5>
    <p className="card-text">{query.phone}</p>
    
  </div>
  </div>
  
  <div className="card">
  <div className="card-body">
    <h5 className="card-title"><i className="fas fa-envelope"></i> Email</h5>
    <p className="card-text">{query.email}</p>
  </div>
</div>


<div className="card">
  <div className="card-body">
    <h5 className="card-title"><i className="fas fa-address-card"></i> Address</h5>
    <p className="card-text">Bhopal, Madhya Pradesh</p>
  </div>
</div>

</div>

<div className="card contact-main">
      <div className="card-body">
        <h2 className="card-title">Get in Touch</h2>
        <p className="card-text">
          <form className="contact-form" method='POST' onSubmit={(e)=>handleSubmit(e)}>
            <div className='contact-input-1'>
          <input className="form-control form-control-lg contact-input" type="text" name='name' value={userdata.name} onChange={(e)=>{handleMessageChange(e)}}/>
          <input className="form-control form-control-lg contact-input" type="text" name='email' value={userdata.email} onChange={(e)=>{handleMessageChange(e)}}></input>
          <input className="form-control form-control-lg contact-input" type="text" name='phone' value={userdata.phone} onChange={(e)=>{handleMessageChange(e)}}></input>
          </div>
          <div className="form-group shadow-textarea ">
  <textarea className="form-control z-depth-1 contact-input-2" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." name='message' value={userdata.message} onChange={(e)=>{handleMessageChange(e)}}></textarea>
</div>
   
<input type="submit" className="btn btn-primary" />
          </form>
          
        </p>
        
      </div>
    </div>
  

       

   </div>
    </>
  )
}

export default Contact
