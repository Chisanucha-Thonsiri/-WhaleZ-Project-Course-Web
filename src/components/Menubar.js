import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/component-css/Menubar.css'

function Menubar({page}){
    const [mini,setMini] = useState(true);
    const Navigate = useNavigate();
    function changePage(option){
        if (option === 'post'){
        Navigate('/home');
        }else if(option === 'chat'){
        Navigate('/chat');
        }else{
            alert('error');
        }
    }
    function miniMenu(){
        setMini(true);
    }
    function fullMenu(){
        setMini(false);
    }
    if(page === 'post'){
        return <> 
    {!mini && (<div className='Menubar'>
    <div className='Menu Unselected' onClick={miniMenu} ><i class="fa-solid fa-bars"></i> <span>เมนู</span></div>
    <div className='Menu Selected' ><i class="fa-solid fa-sign-hanging"></i> <span>โพสต์</span></div>
    <div className='Menu Unselected' onClick={() => changePage('chat')}><i class="fa-solid fa-message"></i> <span>ห้องแชท</span></div>
    <div className='Menu Unselected'><i class="fa-solid fa-file"></i> <span>เอกสารการเรียน</span></div>
    <div className='Menu Unselected'><i class="fa-solid fa-film"></i> <span>คลิป</span></div>
    <div className='Menu Unselected'><i class="fa-solid fa-circle-check"></i> <span>แบบฝึกหัด</span></div>
    <div className='Menu CourseLogout'><i class="fa-solid fa-right-from-bracket"></i> <span>ออกจากคอร์ส</span></div>
    </div>)}
    {mini && (<div className='Menubarmini'>
    <div className='Menumini Unselected' onClick={fullMenu}><i class="fa-solid fa-bars"></i></div>
    <div className='Menumini Selected'><i class="fa-solid fa-sign-hanging"></i></div>
    <div className='Menumini Unselected'  onClick={() => changePage('chat')}><i class="fa-solid fa-message"></i></div>
    <div className='Menumini Unselected'><i class="fa-solid fa-file"></i></div>
    <div className='Menumini Unselected'><i class="fa-solid fa-film"></i></div>
    <div className='Menumini Unselected'><i class="fa-solid fa-circle-check"></i></div>
    <div className='Menumini CourseLogout'><i class="fa-solid fa-right-from-bracket"></i></div>
    </div>)}
    </>
    }else if(page === 'chat'){
        return <> 
    {!mini && (<div className='Menubar'>
     <div className='Menu Unselected' onClick={miniMenu} ><i class="fa-solid fa-bars"></i> <span>เมนู</span></div>
    <div className='Menu Unselected' onClick={() => changePage('post')}><i class="fa-solid fa-sign-hanging"></i> <span>โพสต์</span></div>
    <div className='Menu Selected'><i class="fa-solid fa-message"></i> <span>ห้องแชท</span></div>
    <div className='Menu Unselected'><i class="fa-solid fa-file"> </i> <span>เอกสารการเรียน</span></div>
    <div className='Menu Unselected'><i class="fa-solid fa-film"> </i> <span>คลิป</span></div>
    <div className='Menu Unselected'><i class="fa-solid fa-circle-check"> </i> <span>แบบฝึกหัด</span></div>
    <div className='Menu CourseLogout'><i class="fa-solid fa-right-from-bracket"> </i> <span>ออกจากคอร์ส</span></div>
    </div>)}
    {mini && (<div className='Menubarmini'>
    <div className='Menumini Unselected' onClick={fullMenu}><i class="fa-solid fa-bars"></i></div>
    <div className='Menumini Unselected' onClick={() => changePage('post')}><i class="fa-solid fa-sign-hanging"></i></div>
    <div className='Menumini Selected'><i class="fa-solid fa-message"></i></div>
    <div className='Menumini Unselected'><i class="fa-solid fa-file"></i></div>
    <div className='Menumini Unselected'><i class="fa-solid fa-film"></i></div>
    <div className='Menumini Unselected'><i class="fa-solid fa-circle-check"></i></div>
    <div className='Menumini CourseLogout'><i class="fa-solid fa-right-from-bracket"></i></div>
    </div>)}
    </>
    }else if(page === 'test'){
        return 
    }
}

export default Menubar;