import React from "react";
import "./topbox.scss";
import { uniToppers } from "../../../data";
import Image from "next/image";

const TopBox = () => {
  return (
    <div className="topbox">
      <h1>Institute Toppers</h1>
      <div className="list">
        {uniToppers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <Image
                src={user.img}
                width={40}
                height={40}
                alt="student img"
                className="studImg"
              />
              <div className="userTexts">
                <span className="username">{user.name}</span>
                <span className="standard">{user.standard}</span>
              </div>
            </div>
            <span className="percent">{user.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
