import React, {useState,useEffect} from 'react';
import '../css/Chat.css';
import Navbar from '../components/Navbar';
import ChatInput from '../components/ChatInput';
import Post from '../components/Post';
import Menubar from '../components/Menubar';
import { supabase } from '../utils/supabase'
import Roletag from '../components/Roletag';

let id = 1;
function Chat() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    loadAllPost();
  }, []);
  async function loadAllPost(){
    const {data,error} = await supabase.from('post')
  .select(`
    *,
    userdata (
      id,fname,lname,role,profilepic
    )
  `)
     if (error) {
      console.error('Load error:', error);
    } else {
      setPosts(data);
    }
  }
  
  async function addPost(title,info,date,time,owner){
  const {data,error} = await supabase.from('post')
  .insert([{owner,title,info,date,time}]);
  await loadAllPost();
id += 1 ;
  }
  async function deletePost(id){
  const {data,error} = await supabase.from('post').delete().eq('id',id);
  await loadAllPost();
  }
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="Home">
      <Navbar user={user} />
      <div className='content'>
      <div className="horizontal-container">
    <Menubar page = 'chat'/>
    <div className="Chatroom">
    <div className='ChatroomHeader'>ห้องแชท</div>
      <div className="Chat-scroll">
        <div className='MessageContainer'>
            <div className='MessageProfileSection'>
            <img className='MessageProfilePic' src='https://64.media.tumblr.com/619deb1f33f44aac14e246124cc42d07/tumblr_nxzmw3mRaH1tprvgxo5_540.pnj'/>
        <div className='MessageProfileName'>Chisanucha
        <Roletag role='Course Admin'/></div>
        </div>
        <div className='MessageArea'>
        <div className='MessageBubble'>sfeuddsjdicjweisdfhwjesfjwos9hiresdnojseifdcscnkwesfceinfusejsfeuddsjdicjweisdfhwjesfjwos9hiresdnojseifdcscnkwesfceinfusej</div>
        <div className='MessageTimestamp'>14.03</div>
        </div>
        
        </div>
        <div className='MessageContainer'>
            <div className='MyMessageProfileSection'>
                <div className='MessageProfileName'><Roletag role='Course Admin'/>Chisanucha Thonsiri
        </div>
            <img className='MessageProfilePic' src='https://64.media.tumblr.com/619deb1f33f44aac14e246124cc42d07/tumblr_nxzmw3mRaH1tprvgxo5_540.pnj'/>
        </div>
        <div className='MyMessageArea'>
        <div className='MessageTimestamp'>14.03</div>
        <div className='MyMessageBubble'>Hi</div>

        </div>
        
        </div>

        <div className='MessageContainer MessageNotice'>
            <div className='MessageCancelled'>ข้อความถูกยกเลิกแล้ว</div>
        </div>

        <div className='MessageContainer'>
            <div className='MessageProfileSection'>
            <img className='MessageProfilePic' src='https://64.media.tumblr.com/619deb1f33f44aac14e246124cc42d07/tumblr_nxzmw3mRaH1tprvgxo5_540.pnj'/>
        <div className='MessageProfileName'>Chisanucha
        <Roletag role='Course Admin'/></div>
        </div>
        <div className='MessageArea'>
        <div className='MessageBubble'>sfeuddsjdicjweisdfhwjesfjwos9hiresdnojseifdcscnkwesfceinfusejsfeuddsjdicjweisdfhwjesfjwos9hiresdnojseifdcscnkwesfceinfusej</div>
        <div className='MessageTimestamp'>14.03</div>
        </div>
        
        </div>

        
    {/*{posts.map((post) => (<Post key={post.id} id = {post.id} title = {post.title} info = {post.info} date= {post.date} time = {post.time} 
    fname={post.userdata?.fname} lname={post.userdata?.lname} pfpic={post.userdata?.profilepic} role={post.userdata?.role} owner={post.userdata?.id} deletePost={deletePost}/>))}*/}
    </div><ChatInput addPost={addPost} /></div>
    
  </div>
      </div>
    </div>
  );
}

export default Chat;
