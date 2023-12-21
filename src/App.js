import React, { createContext, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { initialState,reducer } from './Reducer/UseReducer';
import Navbar from './Components/Navbar';
import{Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import About from './Components/About';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import Logout from './Components/Logout';

export const UserContext=createContext();

function App() {

  const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div className="container-fluid app">
      <UserContext.Provider value={{state,dispatch}}>
      <div className="row">
      <Navbar></Navbar>
      </div>
      <div className="row">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about'  element={<About></About>}  /> 
        <Route path="/signin" element={<Signin></Signin>} />
        <Route path='/signup'  element={<Signup></Signup>}  /> 
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
        
      </Routes>
      
      </div>

      </UserContext.Provider>
    </div>
  );
}

export default App;
