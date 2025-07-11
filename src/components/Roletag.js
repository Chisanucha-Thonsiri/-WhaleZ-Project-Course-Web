import React from 'react';
import '../css/component-css/Roletag.css'
function Roletag({role}){
    if(role === 'Student'){
        return <div className='roleTag roleStu'> <i class="fa-solid fa-user-group fa-sm" style={{color: '#ffffff'}}></i> {role}</div>
    }else if(role === 'TA'){
        return <div className='roleTag roleTA'> <i class="fa-solid fa-user-tie fa-sm" style={{color: '#ffffff'}}></i> {role}</div>
    }else if(role === 'Course Admin'){
        return <div className='roleTag roleADMIN'> <i class="fa-solid fa-crown fa-sm" style={{color: '#ffffff'}}></i> {role}</div>
    }
}

export default Roletag;