import React from 'react';
import './RightSideBar.css';
import assets from '../../assets/assets'; 

const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt='' />
        <h3>Wisky Roam <img src={assets.green_dot} className='dot' alt="Online Status" /></h3>
        <p>Hey, There I am Roam Wisky and I'm using this chat app.</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default RightSideBar;
