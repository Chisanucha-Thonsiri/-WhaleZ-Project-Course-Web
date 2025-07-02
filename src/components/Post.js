import React from 'react';
import PropTypes from 'prop-types';
import Roletag from '../components/Roletag'

function Post({id , title,info, date, time, fname ,lname , pfpic, role, owner,deletePost}){
    function onClick(){
        deletePost(id);
    }
    const loginUser = JSON.parse(localStorage.getItem('user'));
    const loginID = loginUser.user.id;
    const loginRole = loginUser.user.role;
   if(loginID === owner || loginRole === 'Course Admin'){
     return(
        <div className='Post'>
            <div className='profileHeader'>
            <div className='profileSection'>
            <img className='Post__profilePic'
            src = {`${pfpic}`}/>
            <div className='vertical-container-post'>
            <div className='profileName'>{fname} {lname} <Roletag role={role}/></div>
            <div className='postDate'> <i class="fa-solid fa-calendar-days fa-sm" style={{color:  '#4e4e4e'}}></i> {date} <i class="fa-solid fa-clock fa-sm" style={{color:  '#4e4e4e'}}></i> {time}</div>
            </div>
            </div>
            <i class="fa-solid fa-trash fa-sm deleteButton" style={{color: '#000000'}} onClick = {onClick}></i>
            </div>
            <div className='postSection'>
            <div className='Post__title'>{title}</div>
            <div className='Post__info'>{info}</div>
            </div>
            {/*
            <img
            className='Post__image'
            src = 'https://i.redd.it/t20nfsv8guwe1.jpeg'/>*/}
        </div>
    )
   }else{
    return(
        <div className='Post'>
            <div className='profileHeader'>
            <div className='profileSection'>
            <img className='Post__profilePic'
            src = {`${pfpic}`}/>
            <div className='vertical-container-post'>
            <div className='profileName'>{fname} {lname} <Roletag role={role}/></div>
            <div className='postDate'> <i class="fa-solid fa-calendar-days fa-sm" style={{color:  '#4e4e4e'}}></i> {date} <i class="fa-solid fa-clock fa-sm" style={{color:  '#4e4e4e'}}></i> {time}</div>
            </div>
            </div>
            <i class="fa-solid fa-trash fa-sm deleteButton" style={{color: '#000000',display:'none'}}></i>
            </div>
            <div className='postSection'>
            <div className='Post__title'>{title}</div>
            <div className='Post__info'>{info}</div>
            </div>
            {/*
            <img
            className='Post__image'
            src = 'https://i.redd.it/t20nfsv8guwe1.jpeg'/>*/}
        </div>
    )
   }

}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};
export default Post;