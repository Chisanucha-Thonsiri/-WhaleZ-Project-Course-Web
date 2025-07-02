import React, {useState,useEffect} from 'react';
import '../css/Home.css';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Post from '../components/Post';
import Menubar from '../components/Menubar';
import { supabase } from '../utils/supabase'

let id = 1;
function Home() {
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
    <Menubar />
    <div className="vertical-container">
      <div className="vertical-scroll">
    <Input addPost={addPost} />
    {posts.map((post) => (<Post key={post.id} id = {post.id} title = {post.title} info = {post.info} date= {post.date} time = {post.time} 
    fname={post.userdata?.fname} lname={post.userdata?.lname} pfpic={post.userdata?.profilepic} role={post.userdata?.role} owner={post.userdata?.id} deletePost={deletePost}/>))}
    </div></div>
    
  </div>
      </div>
    </div>
  );
}

export default Home;
