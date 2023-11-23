import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt="img"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Rahul Patel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$30</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt="img"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Rahul Patel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.completed}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$30</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/images/noavatar.png"
                  alt="img"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Rahul Patel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
