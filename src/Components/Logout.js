import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Logout() {

    
    const nevigate = useNavigate();
  
    // useEffect(() => {
    
    //     fetch('/logout',{
    //         method:'GET',
    //         headers:{
    //             Accept: 'application/json',
    //             'Content-Type':"application.json"
    //         },
    //         credentials:"include"

    //     }).then((res) => {
    //         dispatch({type:'USER',payload:false})
    //         if (res.status === 200) {
                
    //             nevigate('/signin');
    //         } else {
                
    //             console.error('Logout failed');
    //         }
    //     })
    //     .catch((error) => {
    //         // Handle any fetch errors here
    //         console.error('Fetch error:', error);
    //     });
        
    //   },[]);


  return (
    <div>
      Logout from session
    </div>
  )
}

export default Logout
