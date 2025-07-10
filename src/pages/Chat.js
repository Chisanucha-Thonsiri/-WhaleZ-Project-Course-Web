import React, {useState,useEffect} from 'react';
import '../css/Chat.css';
import Navbar from '../components/Navbar';
import ChatInput from '../components/ChatInput';
import Post from '../components/Post';
import Menubar from '../components/Menubar';
import { supabase } from '../utils/supabase'
import Roletag from '../components/Roletag';
import Message from '../components/Message'
import LoadSpinner from '../components/LoadSpinner';

let id = 1;
function Chat() {
  let lastDate = null;
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoadingBool] = useState(false);
  useEffect(() => {
    loadAllMessage();
  }, []);
  async function loadAllMessage(){
    setLoadingBool(true);
    const {data,error} = await supabase.from('messagedata')
  .select(`
    *,
    userdata (
      id,fname,lname,role,profilepic
    )
  `).order('id',{addMessage:true})
     if (error) {
      console.error('Load error:', error);
    } else {
      setMessages(data);
    }
    setLoadingBool(false);
  }


  
  async function addMessage(message,date,time,status,senderID){
  const {data,error} = await supabase.from('messagedata')
  .insert([{message,date,time,status,senderID}]);
  await loadAllMessage();
id += 1 ;
  }
  async function deleteMessage(id){
  const {data,error} = await supabase.from('messagedata').update({status:'0'}).eq('id',id);
  await loadAllMessage();
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
        {messages.map((message) => {const showDate = message.date != lastDate;  lastDate = message.date; return (<Message key={message.id} id={message.id} message={message.message} date={message.date} time={message.time} status={message.status} fname={message.userdata?.fname}
        lname = {message.userdata?.lname} role={message.userdata?.role} pfpic={message.userdata?.profilepic} senderId = {message.userdata?.id} deleteMessage={deleteMessage} showDate={showDate}/>)})}
  

    </div><ChatInput addMessage={addMessage} /></div>
    
  </div>
      </div>
    {isLoading &&(
         <LoadSpinner/>
    )}
    </div>
  );
}

export default Chat;
