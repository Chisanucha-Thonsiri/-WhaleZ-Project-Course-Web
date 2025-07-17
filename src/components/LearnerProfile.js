import React from "react";
import '../css/component-css/LearnerProfile.css'
import Roletag from '../components/Roletag';

function LearnerProfile({user}){
    const pfpic = user.user.profilepic;
    return     <div className='learner-profile-container'><div className='learner-profile-title'><span>ข้อมูลผู้เรียน</span> <i class="fa-solid fa-graduation-cap"></i></div>
    <div className = 'learner-profile-pfp'><img src = {`${pfpic}`}/></div>
    <div className = 'learner-profile-role'><Roletag role={user.user.role}/></div>
    <div className='learner-profile-info'>
      <div className='learner-profile-name'><i class="fa-solid fa-user"></i> ชื่อ: {user.user.fname} {user.user.lname}</div>
      <div className='learner-profile-name'><i class="fa-solid fa-calendar-plus"></i> เข้าร่วมเมื่อ: 18/06/2568 </div> {/* Mock up for later */}
      <div className='learner-profile-withdraw-button'><i class="fa-solid fa-user-minus"></i> ถอนตัวจากคอร์ส </div>
    </div>
    </div>
}

export default LearnerProfile;