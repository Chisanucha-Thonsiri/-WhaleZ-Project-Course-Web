import React,{useState} from 'react';
import PropTypes, { element } from 'prop-types';
import getDate from '../utils/getDate'

function ChatInput({addMessage}){
const [Input, setInput] = useState('');

function onChange(event){
setInput(event.target.value);
}


function onClick(){
    const user = JSON.parse(localStorage.getItem('user'));
    const owner = user.user.id;
    const status = 1;
       if(Input){
        const dateData = getDate();
        const date = dateData.date;
        const time = dateData.time;
        addMessage(Input,date,time,status,owner);
        setInput('');
    }
}
return (
<div className='MessageInputBox'>
<div className='Message__field'><input className='MessageInput'
type = 'text'
value = {Input}
onChange={onChange}
placeholder='ข้อความ'/></div>
<div className='InputButton'><i class="fa-solid fa-paper-plane"  onClick={onClick}></i></div>


</div>
);
}

ChatInput.propTypes = {
    addMessage : PropTypes.func.isRequired
};

export default ChatInput;