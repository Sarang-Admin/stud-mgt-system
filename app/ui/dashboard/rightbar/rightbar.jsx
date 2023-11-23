import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/images/baps_logo.png"
            alt=""
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>
            V4.0 of Admin Dashboard is Coming Soon{" "}
          </h3>
          <span className={styles.subtitle}>
            Launch Date: Will be update soon
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti
            maiores blanditiis odit rem sequi impedit itaque aperiam quia amet
            incidunt illum sint minima quos, fugiat, optio facilis commodi
            nostrum?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
