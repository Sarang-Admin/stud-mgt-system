import React from "react";
import styles from "../../ui/dashboard/students/student.module.css";
import Search from "../../ui/dashboard/serach/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchStudents } from "../../lib/data";
import { deleteStudent } from "../../lib/studentActions";

const StudentManagement = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, students } = await fetchStudents(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a student" />
        <Link href="/admin/studentManagement/addStudent">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Student ID</td>
            <td>Phone Number</td>
            <td>Standard</td>
            <td>Hostel</td>
            <td>Room Number</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={item.img || "/images/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {item.lastname + " " + item.firstname}
                </div>
              </td>
              <td>{item.studentID}</td>
              <td>{item.contact}</td>
              <td>{item.standard}</td>
              <td>{item.hostel}</td>
              <td>{item.hostelRoom}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/admin/studentManagement/${item.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteStudent}>
                    <input type="hidden" name="id" value={item.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default StudentManagement;
