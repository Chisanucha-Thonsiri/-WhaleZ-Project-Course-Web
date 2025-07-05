import React,{useState} from 'react';
import PropTypes, { element } from 'prop-types';

function ChatInput({addPost}){
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
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        addPost(Input,InputINF,date,time,owner);
        setInput('');
        setInputINF('');
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
    addPost : PropTypes.func.isRequired
};

export default ChatInput;