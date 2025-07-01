import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
import { supabase } from '../utils/supabase'

function Login() {
  const navigate = useNavigate(); 



  const handleLogin = async() => {
    const tl = document.getElementById('input__tel').value;
    const pw = document.getElementById('input__pass').value;
    const {data,error} = await supabase.from('userdata').select('*').eq('tel', tl)
    if (error) {
      console.error('Supabase Error:', error);
      alert('Login failed');
      return;
    }
    if (!data || data.length === 0) {
      alert('User not found');
      return;
    }
    const user = data[0];
    if(pw === user.password){
    localStorage.setItem('user', JSON.stringify({user}));
    navigate('/home');
    }else{
      alert('Password Incorrect!')
    }
    
  };

  const regis = () =>{
  navigate('/register');
  }

  return (
    <div className='Login-Box'>
      <div className='Login-Title'><i class="fa-solid fa-user fa-md" style={{color: '#000000'}}></i> เข้าสู่ระบบ</div>
      <div className='Tl-Pw'>
      <div className='Telephone'>
      <div><i class="fa-solid fa-phone fa-sm" style={{color: '#000000'}}></i> เบอร์โทรศัพท์</div>
      <input type="text" placeholder="Tel" className='input__tel' id='input__tel' />
      </div>
      <div className='Telephone'>
      <div><i class="fa-solid fa-lock fa-sm" style={{color: '#000000'}}></i> รหัสผ่าน</div>
      <input type="password" placeholder="Password" className='input__pass' id='input__pass'/>
      </div>

      </div>
      
      <button onClick={handleLogin}>เข้าสู่ระบบ</button>
      <div className='noAcc'>ยังไม่มีบัญชีหรอ? <span onClick={regis}>สมัครเลย!</span></div>
    </div>
  );
}

export default Login;
