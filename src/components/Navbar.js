import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/component-css/Navbar.css'

function Navbar({user}){
    const navigate = useNavigate();
const Logout = () =>{
    localStorage.removeItem('user');
    navigate('/');
}
const pfpic = user.user.profilepic;
return <header className='Navbar'><div className='webName'>WhaleCourse</div>
<div className='login-Profile'> <img className='Nav__profilePic'
            src = {`${pfpic}`}/>
            <div className='login-name'>{user.user.fname} {user.user.lname}</div> 
            <i className="fa-solid fa-arrow-right-from-bracket fa-lg logout-icon"
            onClick={Logout}></i></div></header>
            
}



export default Navbar;