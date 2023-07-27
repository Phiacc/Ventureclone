import React from 'react'
import navProfile from "../../../assests/tracyimage.jpeg"

export const Profile= (props) => {
    if (props.type === "profile1") {
      return (
        <div className='profile'
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "20px",
            
          }}
        >
            <img className='profile-image' src={navProfile}  alt="logo"  />
        </div>
      );
    }
}