import React from "react";
import venture from '../../../assests/logo1.JPG';
import loadingImage from '../../../assests/loading image.JPG'

export const Image = (props) => {
  if (props.name === "venture") {
  return (
   <div className="flex">
    <img src={venture} width="50px" height="38px" alt="logo"  />
    <h2 className="logo-name">VenturePay</h2>
   </div>
  )
  }
  if (props.name === "loadingimage") {
    return(
   <div>
      <img src={loadingImage} alt="" />
    </div>
    )
  }
};
