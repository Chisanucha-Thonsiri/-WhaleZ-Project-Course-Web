import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css'
import { supabase } from '../utils/supabase'

function Register() {
  const navigate = useNavigate(); 



  const handleRegister = async() => {
    const fname = document.getElementById('input__fname').value;
    const lname = document.getElementById('input__lname').value;
    const email = document.getElementById('input__email').value;
    const tel = document.getElementById('input__tel').value;
    const password = document.getElementById('input__pass').value;
    const cpw = document.getElementById('input__checkpass').value;
    if(!fname || !lname || !email || !tel || !password ||!cpw){
        alert('กรอกข้อมูลไม่ครบ!');
    }else if(password != cpw){
        alert('รหัสผ่านไม่ตรงกัน');
    }else{
        const{data,error} = await supabase.from('userdata').insert([{fname,lname,email,tel,password}]);
        if (error) {
      console.error('Supabase Error:', error);
      alert('Register failed');
      return;
    }else{
        alert('ลงทะเบียนสำเร็จ!');
        navigate('/');
    }
    }
    
  };

  const login = () =>{
  navigate('/');
  }

  return (
    <div className='Register-Box'>
      <div className='Register-Title'><i class="fa-solid fa-user-plus fa-md" style={{color: '#000000'}}></i> สมัครใช้งาน</div>
      <div className='Tl-Pw'>
    
      <div className='f-lName'>
        <div className='Form-Box'>
      <div><i class="fa-solid fa-user fa-sm" style={{color: '#000000'}}></i> ชื่อจริง</div>
      <input type="text" placeholder="First Name" className='input__tel' id='input__fname' />
      </div>
       <div className='Form-Box'>
      <div><i class="fa-solid fa-user fa-sm" style={{color: '#000000'}}></i> นามสกุล</div>
      <input type="text" placeholder="Last Name" className='input__tel' id='input__lname' />
      </div>
      </div>
      
      <div className='Form-Box'>
      <div><i class="fa-solid fa-envelope fa-sm" style={{color: '#000000'}}></i> อีเมล</div>
      <input type="text" placeholder="Email" className='input__pass' id='input__email'/>
      </div>

      <div className='Form-Box'>
      <div><i class="fa-solid fa-phone fa-sm" style={{color: '#000000'}}></i> เบอร์โทรศัพท์</div>
      <input type="text" placeholder="Telephone" className='input__pass' id='input__tel'/>
      </div>

      <div className='Form-Box'>
      <div><i class="fa-solid fa-lock fa-sm" style={{color: '#000000'}}></i> รหัสผ่าน</div>
      <input type="password" placeholder="Password" className='input__pass' id='input__pass'/>
      </div>

      <div className='Form-Box'>
      <div><i class="fa-solid fa-lock fa-sm" style={{color: '#000000'}}></i> ยืนยันรหัสผ่าน</div>
      <input type="password" placeholder="Password" className='input__pass' id='input__checkpass'/>
      </div>

      </div>
      
      <button onClick={handleRegister}>ลงทะเบียน</button>
      <div className='noAcc'>มีบัญชีแล้ว? <span onClick={login}>เข้าสู่ระบบ!</span></div>
    </div>
  );
}

export default Register;
