import React from "react";
import '../css/component-css/LoadSpinner.css'

function LoadSpinner(){
    return <div className='load-container'>
    <div className='spinner-container'>
      <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
      <span>กำลังโหลด...</span>
    </div>
  </div>
}

export default LoadSpinner;