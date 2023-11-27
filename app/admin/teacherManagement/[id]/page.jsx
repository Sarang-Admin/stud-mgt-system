import React from "react";
import styles from "../teacherProfile.module.css";
import Image from "next/image";
import { fetchTeacher } from "@/app/lib/data";
import { updateTeacher } from "@/app/lib/actions";

const TeacherProfilePage = async ({ params }) => {
  const { id } = params;
  const teacher = await fetchTeacher(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={teacher.img || "/images/noavatar.png"} alt="" fill />
        </div>
        <div className="mt-5 text-3xl ml-5">
          {teacher.firstname} {teacher.lastname}
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateTeacher} className={styles.form}>
          <input type="hidden" name="id" value={teacher.id} />
          <label htmlFor="">First Name</label>
          <input type="text" name="firstname" placeholder={teacher.firstname} />
          <label htmlFor="">Last Name</label>
          <input type="text" name="lastname" placeholder={teacher.lastname} />
          <label htmlFor="">Degree</label>
          <input type="text" name="degree" placeholder={teacher.degree} />
          <label htmlFor="">Address</label>
          <input type="text" name="address" placeholder={teacher.address} />
          <label htmlFor="">City/Village</label>
          <input type="text" name="city" placeholder={teacher.city} />
          <label htmlFor="">State</label>
          <input type="text" name="state" placeholder={teacher.state} />
          <label htmlFor="">Pincode</label>
          <input type="text" name="pincode" placeholder={teacher.pincode} />

          <label htmlFor="">Mobile Number</label>
          <input type="text" name="phone" placeholder={teacher.phone} />
          <label htmlFor="">Image Source</label>
          <input type="text" name="img" placeholder={teacher.img} />

          <button>Update Teacher</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherProfilePage;
