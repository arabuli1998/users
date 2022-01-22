import React from 'react';
import Mypage from './Mypage.css'
import Typed from 'react-typed'



const MyPage = () => {
  return <div className='main-container'>
      
<div className='main-info'>
    <h1>web development and Front End</h1>
    <Typed
    className='typed'
    strings={['Web development', 'Front-end developer','React js']}
    typeSpeed={40}
    loop
    backSpeed={60}
/>
<a href='#' className='btn-main'>contact me</a>
    </div>
  
  </div>;
};

export default MyPage;
