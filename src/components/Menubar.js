import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menubar({page}){
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
    if(page === 'post'){
        return <div className='Menubar'>
    <div className='Menu Selected' ><i class="fa-solid fa-message"></i> โพสต์</div>
    <div className='Menu Unselected' onClick={() => changePage('chat')}><i class="fa-solid fa-message"></i> ห้องแชท</div>
    <div className='Menu Unselected'><i class="fa-solid fa-file"> </i> เอกสารการเรียน</div>
    <div className='Menu Unselected'><i class="fa-solid fa-film"> </i> คลิป</div>
    <div className='Menu Unselected'><i class="fa-solid fa-circle-check"> </i> แบบฝึกหัด</div>
    <div className='Menu CourseLogout'><i class="fa-solid fa-right-from-bracket"> </i> ออกจากคอร์ส</div>
    </div>
    }else if(page === 'chat'){
        return <div className='Menubar'>
    <div className='Menu Unselected' onClick={() => changePage('post')}><i class="fa-solid fa-message"></i> โพสต์</div>
    <div className='Menu Selected'><i class="fa-solid fa-message"></i> ห้องแชท</div>
    <div className='Menu Unselected'><i class="fa-solid fa-file"> </i> เอกสารการเรียน</div>
    <div className='Menu Unselected'><i class="fa-solid fa-film"> </i> คลิป</div>
    <div className='Menu Unselected'><i class="fa-solid fa-circle-check"> </i> แบบฝึกหัด</div>
    <div className='Menu CourseLogout'><i class="fa-solid fa-right-from-bracket"> </i> ออกจากคอร์ส</div>
    </div>
    }
}

export default Menubar;