import React,{useState} from 'react';
import PropTypes, { element } from 'prop-types';
import getDate from '../utils/getDate';
import '../css/component-css/Input.css'

function Input({addPost}){
const [Input, setInput] = useState('');
const [InputINF, setInputINF] = useState('');

function onChange(event){
setInput(event.target.value);
}

function onChangeINF(event){
setInputINF(event.target.value);
}

function onClick(){
    const user = JSON.parse(localStorage.getItem('user'));
    const owner = user.user.id;
       if(Input && InputINF){
        const dateData = getDate();
        const date = dateData.date;
        const time = dateData.time;
        addPost(Input,InputINF,date,time,owner);
        setInput('');
        setInputINF('');
    }
}
return (
    <div className='Input'>
<div className='Input__header'> <i class="fa-solid fa-pen-to-square" style={{color: '#000000'}}></i> สร้างโพสต์</div>
<div className='horizontal-header'>
<div className='Title__header'>หัวเรื่อง: </div>
<input
className='Input__field'
type = 'text'
value = {Input}
onChange={onChange}
placeholder='ใส่หัวเรื่อง'/>
</div>
<textarea 
className='Input__fieldINF'
type = 'text'
value = {InputINF}
onChange={onChangeINF}
placeholder='ข้อมูล'/>
<div className='Input__buttonField'>
<button className='Input__button' onClick={onClick}>POST</button>
</div>
</div>
);
}

Input.propTypes = {
    addPost : PropTypes.func.isRequired
};

export default Input;