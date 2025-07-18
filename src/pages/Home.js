import React, {useState,useEffect} from 'react';
import '../css/Home.css';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import Menubar from '../components/Menubar';
import { supabase } from '../utils/supabase'
import LoadSpinner from '../components/LoadSpinner';
import LearnerProfile from '../components/LearnerProfile';

let id = 1;
function Home() {
  const [posts, setPosts] = useState([]);
  const[isLoading, isLoadingBool] = useState(false);
  useEffect(() => {
    loadAllPost();
  }, []);
  async function loadAllPost(){
    isLoadingBool(true);
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
    isLoadingBool(false);
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
    <Menubar page='post' />
    <div className="vertical-container">
      <div className="vertical-scroll">
    <CreatePost addPost={addPost} />
    {posts.map((post) => (<Post key={post.id} id = {post.id} title = {post.title} info = {post.info} date= {post.date} time = {post.time} 
    fname={post.userdata?.fname} lname={post.userdata?.lname} pfpic={post.userdata?.profilepic} role={post.userdata?.role} owner={post.userdata?.id} deletePost={deletePost}/>))}
    </div></div>
    <LearnerProfile user={user}/>
  </div>
      </div>
      {isLoading && <LoadSpinner/>}
      
    </div>
  );
}

export default Home;
