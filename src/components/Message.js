import React from "react";
import Roletag  from "./Roletag";
function Message({id,fname,lname,role,pfpic,senderId,message,date,time,status,deleteMessage,showDate}){
const loginUser = JSON.parse(localStorage.getItem('user'));
const loginID = loginUser.user.id;
const currentLoadingDate = localStorage.getItem('currentLoadingDate');
function onClick(){
    deleteMessage(id);
}
if(showDate){
    if(!status){
    if(senderId === loginID){
           return <div><div className='MessageContainer MessageNotice'>
            <div className='DateBanner'><i class="fa-solid fa-calendar-days" style={{margin: '2px'}}></i>{date}</div>
        </div><div className='MessageContainer MessageNotice'>
            <div className='MessageCancelled'>คุณยกเลิกข้อความแล้ว</div>
        </div></div>
    }else{
           return <div><div className='MessageContainer MessageNotice'>
            <div className='DateBanner'><i class="fa-solid fa-calendar-days" style={{margin: '2px'}}></i>{date}</div>
        </div><div className='MessageContainer MessageNotice'>
            <div className='MessageCancelled'>{fname} {lname} ยกเลิกข้อความแล้ว</div>
        </div></div>
    }
}else{
    console.log('ELSEJa');
    if (senderId === loginID){
    return  <div><div className='MessageContainer MessageNotice'>
            <div className='DateBanner'><i class="fa-solid fa-calendar-days" style={{margin: '2px'}}></i>{date}</div>
        </div><div className='MessageContainer'>
            <div className='MyMessageProfileSection'>
                <div className='MessageProfileName'><Roletag role={`${role}`}/>{fname} {lname}
        </div>
            <img className='MessageProfilePic' src={`${pfpic}`}/>
        </div>
        <div className='MyMessageArea'>
        <div className='MessageTimestamp'><i class="fa-solid fa-trash" style={{color:'#757575'}} onClick={onClick}></i> {time}</div>
        <div className='MyMessageBubble'>{message}</div>

        </div>
        
        </div>  </div>
}else{
        console.log('ELSE');
        return <div><div className='MessageContainer MessageNotice'>
            <div className='DateBanner'><i class="fa-solid fa-calendar-days" style={{margin: '2px'}}></i>{date}</div>
        </div><div className='MessageContainer'>
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
        </div>
}
}
}else{
    if(!status){
    if(senderId === loginID){
           return <div className='MessageContainer MessageNotice'>
            <div className='MessageCancelled'>คุณยกเลิกข้อความแล้ว</div>
        </div>
    }else{
           return <div className='MessageContainer MessageNotice'>
            <div className='MessageCancelled'>{fname} {lname} ยกเลิกข้อความแล้ว</div>
        </div>
    }
}else{
    if (senderId === loginID){
        console.log('This One');
    return  <div className='MessageContainer'>
            <div className='MyMessageProfileSection'>
                <div className='MessageProfileName'><Roletag role={`${role}`}/>{fname} {lname}
        </div>
            <img className='MessageProfilePic' src={`${pfpic}`}/>
        </div>
        <div className='MyMessageArea'>
        <div className='MessageTimestamp'><i class="fa-solid fa-trash" style={{color:'#757575'}} onClick={onClick}></i> {time}</div>
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
}

export default Message;