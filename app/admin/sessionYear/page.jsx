import React from "react";
import styles from "./sessionYear.module.css";
import Search from "../../ui/dashboard/serach/search";
import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/pagination";

const SessionYearPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Session Year" />
        <Link href="/admin/sessionYear/addYear">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Session Start</td>
            <td>Session End</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>21/05/2022</td>
            <td>21/05/2023</td>
            <td>21/05/2022</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default SessionYearPage;
