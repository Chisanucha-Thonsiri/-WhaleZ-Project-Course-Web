import React from 'react';

function Menubar(){
    return <div className='Menubar'>
    <div className='Menu Selected'><i class="fa-solid fa-message"></i> โพสต์</div>
    <div className='Menu Unselected'><i class="fa-solid fa-file"> </i> เอกสารการเรียน</div>
    <div className='Menu Unselected'><i class="fa-solid fa-film"> </i> คลิป</div>
    <div className='Menu Unselected'><i class="fa-solid fa-circle-check"> </i> แบบฝึกหัด</div>
    <div className='Menu CourseLogout'><i class="fa-solid fa-right-from-bracket"> </i> ออกจากคอร์ส</div>
    </div>
}

export default Menubar;