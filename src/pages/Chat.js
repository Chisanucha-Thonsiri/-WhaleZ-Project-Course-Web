import React, {useState,useEffect} from 'react';
import '../css/Chat.css';
import Navbar from '../components/Navbar';
import ChatInput from '../components/ChatInput';
import Post from '../components/Post';
import Menubar from '../components/Menubar';
import { supabase } from '../utils/supabase'
import Roletag from '../components/Roletag';
import Message from '../components/Message'

let id = 1;
const temppfp = 'https://64.media.tumblr.com/619deb1f33f44aac14e246124cc42d07/tumblr_nxzmw3mRaH1tprvgxo5_540.pnj';
function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    loadAllMessage();
  }, []);
  async function loadAllMessage(){
    const {data,error} = await supabase.from('messagedata')
  .select(`
    *,
    userdata (
      id,fname,lname,role,profilepic
    )
  `)
     if (error) {
      console.error('Load error:', error);
    } else {
      setMessages(data);
    }
  }


  
  async function addMessage(message,date,time,status,senderID){
  const {data,error} = await supabase.from('messagedata')
  .insert([{message,date,time,status,senderID}]);
  await loadAllMessage();
id += 1 ;
  }
  {/*DELETE MESSAGE TEMPLATE: async function deletePost(id){
  const {data,error} = await supabase.from('post').delete().eq('id',id);
  await loadAllPost();
  } */}
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
        {messages.map((message) => (<Message key={message.id} id={message.id} message={message.message} date={message.date} time={message.time} status={message.status} fname={message.userdata?.fname}
        lname = {message.userdata?.lname} role={message.userdata?.role} pfpic={message.userdata?.profilepic} senderId = {message.userdata?.id}/>))}
  

        
    {/*{posts.map((post) => (<Post key={post.id} id = {post.id} title = {post.title} info = {post.info} date= {post.date} time = {post.time} 
    fname={post.userdata?.fname} lname={post.userdata?.lname} pfpic={post.userdata?.profilepic} role={post.userdata?.role} owner={post.userdata?.id} deletePost={deletePost}/>))}*/}
    </div><ChatInput addMessage={addMessage} /></div>
    
  </div>
      </div>
    </div>
  );
}

export default Chat;
