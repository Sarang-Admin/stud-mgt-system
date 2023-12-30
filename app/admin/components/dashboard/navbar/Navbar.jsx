import React from "react";
import "./navbar.scss";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdExpand, IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image
          src={"/images/baps_logo.png"}
          width={55}
          height={55}
          alt="logo"
        />
        <span>SARANG</span>
      </div>
      <div className="icons">
        <MdSearch className="icon" />
        <AiOutlineAppstore className="icon" />
        <IoMdExpand className="icon" />
        <div className="notification">
          <IoIosNotificationsOutline />
          <span>1</span>
        </div>
        <div className="user">
          <Image
            className="userImg"
            src={"/images/noavatar.png"}
            width={40}
            height={40}
            alt="logo"
          />
          <span>Sarang Admin</span>
        </div>
        <IoSettingsOutline className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
