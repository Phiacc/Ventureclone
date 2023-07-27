import React from "react";
import { Icon } from "../../atoms/Icon/index.jsx";
import { Button } from "../../atoms/Button/Index.jsx";
import { Image } from "../../atoms/Image/index.jsx";
import { Profile } from "../../atoms/Profile/index.jsx";
export const Navbar = ({ imgURL, name }) => {
  return (
    <div className="navbar">
    <Image name="venture" />
      <div className="middle">
      <Button type="home-button" />
      <Button type="app-button" />
      <Button type="price-button" />
      <Button type="support-button" />
      </div>
      <div className="flex">
        <div className="flex bell-profile">
        <Icon className="bell" name="bell" />
        <Profile type="profile1" />
        </div>
        <Button type="getstarted" /></div>
        <Icon type="hamburger" />
    </div>
  );
};
