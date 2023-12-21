
import React, { useEffect, useState } from 'react'

function Home() {

  const [userName,setUserName]=useState('');
  const [show,setShow]=useState(false);
  
  useEffect(() => {
    
    const callHomepage =async ()=>{
      try{
            const resp =await fetch('/getdata',{
              method:'GET',
              headers:{
            
                "Content-Type": "application/json"
              }
            })
            const data = await resp.json();
            console.log(data);
            setUserName(data.name);
            setShow(true);
            
  
           
      }catch(err){
          console.log(err);
        
      }
     };
     
  
    callHomepage();

  },[]);
  

  return (<>
    <div className='home' >
       
       <div style={{'margin-top':'150px','color':'blue','font-weight':'800'}}>Welcome</div>
      <h1>{userName}</h1>
      <h2>{show ? 'Happy, to see you back' : 'We Are Mern Developer'}</h2>
        </div>
    </>
  )
}

export default Home
