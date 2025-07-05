import React from "react";
import Roletag  from "./Roletag";
function Message({id,fname,lname,role,pfpic,senderId,message,date,time,status}){
const loginUser = JSON.parse(localStorage.getItem('user'));
const loginID = loginUser.user.id;
console.log(lname)
console.log(loginID)
console.log(senderId)
if(!status){
    return <div className='MessageContainer MessageNotice'>
            <div className='MessageCancelled'>ยกเลิกข้อความแล้ว</div>
        </div>
}else{
    if (senderId === loginID){
    return  <div className='MessageContainer'>
            <div className='MyMessageProfileSection'>
                <div className='MessageProfileName'><Roletag role={`${role}`}/>{fname} {lname}
        </div>
            <img className='MessageProfilePic' src={`${pfpic}`}/>
        </div>
        <div className='MyMessageArea'>
        <div className='MessageTimestamp'>{time}</div>
        <div className='MyMessageBubble'>{message}</div>

        </div>
        
        </div>  
}else{
    
        return <div className='MessageContainer'>
            <div className='MessageProfileSection'>
            <img className='MessageProfilePic' src={`${pfpic}`}/>
        <div className='MessageProfileName'>{fname} {lname}
        <Roletag role={`${role}`}/></div>
        </div>
        <div className='MessageArea'>
        <div className='MessageBubble'>{message}</div>
        <div className='MessageTimestamp'>{time}</div>
        </div>

        </div> 
}
}
}

export default Message;