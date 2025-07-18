import React,{useState} from 'react';
import PropTypes, { element } from 'prop-types';
import getDate from '../utils/getDate';
import '../css/component-css/CreatePost.css'

function CreatePost({addPost}){
const [Input, setInput] = useState('');
const [InputINF, setInputINF] = useState('');
const [IsButton, setIsButton] = useState(true);

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

function createPostOnClick(){
    setIsButton(false);
}

function cancelPostButtonOnClick(){
    setInput('');
    setInputINF('');
    setIsButton(true);
}
return (
  <>
    {IsButton && (
      <div className="create-post">
        <div className="create-post-button" onClick={createPostOnClick}>
          <i className="fa-solid fa-pen-to-square"></i> สร้างโพสต์
        </div>
      </div>
    )}

    {!IsButton && (
      <div className="Input">
        <div className="Input__header">
          <i className="fa-solid fa-pen-to-square" style={{ color: '#000000' }}></i> สร้างโพสต์
        </div>

        <div className="horizontal-header">
          <div className="Title__header">หัวเรื่อง:</div>
          <input
            className="Input__field"
            type="text"
            value={Input}
            onChange={onChange}
            placeholder="ใส่หัวเรื่อง"
          />
        </div>

        <textarea
          className="Input__fieldINF"
          value={InputINF}
          onChange={onChangeINF}
          placeholder="ข้อมูล"
        />

        <div className="Input__buttonField">
            <div className="cancel-post-button" onClick={cancelPostButtonOnClick}>
            ยกเลิก
          </div>
          <div className="post-button" onClick={onClick}>
            <span>โพสต์</span> <i class="fa-solid fa-arrow-up"></i>
          </div>
        </div>
      </div>
    )}
  </>
);

}

CreatePost.propTypes = {
    addPost : PropTypes.func.isRequired
};

export default CreatePost;