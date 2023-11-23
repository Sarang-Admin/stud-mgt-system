import React from "react";
import styles from "./addYear.module.css";

const AddSessionPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div className="w-[45%]">
          <label htmlFor="session_start" className="mr-3">
            Session Start Date
          </label>
          <input type="date" name="session_start" id="session_start" />
        </div>
        <div className="w-[45%]">
          <label htmlFor="session_end" className="mr-3">
            Session End Date
          </label>
          <input type="date" name="session_end" id="session_end" />
        </div>
        <button type="submit">Add Session</button>
      </form>
    </div>
  );
};

export default AddSessionPage;
