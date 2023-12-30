import React from "react";
import styles from "../../ui/dashboard/teachers/teachers.module.css";
import Search from "../../ui/dashboard/serach/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchTeachers } from "../../lib/data";
import { deleteTeacher } from "../../lib/actions";

const UserManagement = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, teachers } = await fetchTeachers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a teacher" />
        <Link href="/admin/teacherManagement/addTeacher">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
            <td>Created At</td>
            <td>Degree</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {teachers.map((item) => (
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
                  {item.firstname} {item.lastname}
                </div>
              </td>
              <td>{item.phone}</td>
              <td>{item.createdAt.toString().slice(4, 16)}</td>
              <td>{item.degree}</td>
              <td>{item.isActive ? "Active" : "Inactive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/admin/teacherManagement/${item.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteTeacher}>
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

export default UserManagement;
