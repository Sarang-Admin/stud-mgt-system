import React from "react";
import styles from "../studentProfile.module.css";
import Image from "next/image";
import { fetchStudent } from "../../../lib/data";
import { updateStudent } from "../../../lib/studentActions";
import Link from "next/link";

const StudentProfilePage = async ({ params }) => {
  const { id } = params;
  const student = await fetchStudent(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={student.img || "/images/noavatar.png"} alt="" fill />
        </div>
        <div className="mt-5 text-3xl ml-5">
          {student.firstname} {student.lastname}
        </div>
        <Link href={`/admin/studentManagement/icardManage/${student.id}`}>
          <button className={`${styles.button} ${styles.view}`}>
            View Icard
          </button>
        </Link>
      </div>
      <div className={styles.formContainer}>
        <form action={updateStudent} className={styles.form}>
          <input type="hidden" name="id" value={student.id} />
          <div className="">
            <label htmlFor="studentID" className="mr-3">
              વિદ્યાર્થીનો યુનિક આઈડી:
            </label>
            <input
              type="text"
              name="studentID"
              placeholder={student.studentID}
              className="w-32"
            />
            <label htmlFor="grNumber" className="ml-3 mr-3">
              જી.આર. નંબર:
            </label>
            <input
              type="text"
              name="grNumber"
              placeholder={student.grNumber}
              className="w-32"
            />
            <label htmlFor="admissionDate" className="ml-3 mr-3">
              એડમિશન લીધાની તારીખ:
            </label>
            <input
              type="text"
              name="admissionDate"
              placeholder={student.admissionDate}
              className="w-32"
            />
          </div>
          <div>
            <label htmlFor="firstname" className="mr-3">
              નામ:
            </label>
            <input
              type="text"
              name="firstname"
              placeholder={student.firstname}
              className="w-32"
            />
            <label htmlFor="lastname" className="ml-3 mr-3">
              અટક:
            </label>
            <input
              type="text"
              name="lastname"
              placeholder={student.lastname}
              className="w-32"
            />
            <label htmlFor="fathername" className="ml-3 mr-3">
              પિતાનું નામ:
            </label>
            <input
              type="text"
              name="fathername"
              placeholder={student.fathername}
              className="w-32"
            />
            <label htmlFor="mothername" className="ml-3 mr-3">
              માતાનું નામ:
            </label>
            <input
              type="text"
              name="mothername"
              placeholder={student.mothername}
              className="w-32"
            />
          </div>
          <div>
            <label htmlFor="address" className="mr-3">
              સરનામું:
            </label>
            <input
              type="text"
              name="address"
              placeholder={student.address}
              className="w-[70%]"
            />
          </div>
          <div>
            <label htmlFor="city" className="mr-3">
              શહેર/ગામનું નામ:
            </label>
            <input
              type="text"
              name="city"
              placeholder={student.city}
              className="w-32"
            />
            <label htmlFor="state" className="ml-3 mr-3">
              રાજ્યનું નામ:
            </label>
            <input
              type="text"
              name="state"
              placeholder={student.state}
              className="w-32"
            />
            <label htmlFor="pincode" className="ml-3 mr-3">
              પીનકોડ:
            </label>
            <input
              type="text"
              name="pincode"
              placeholder={student.pincode}
              className="w-32"
            />
          </div>
          <div>
            <label htmlFor="contact" className="mr-3">
              મોબાઈલ નંબર:
            </label>
            <input
              type="text"
              name="contact"
              placeholder={student.contact}
              className="w-32"
            />
            <label htmlFor="ParentContact" className="ml-3 mr-3">
              વાલીનો મોબાઈલ નંબર:
            </label>
            <input
              type="text"
              name="ParentContact"
              placeholder={student.ParentContact}
              className="w-32"
            />
            <label htmlFor="whContact" className="ml-3 mr-3">
              WhatsApp નંબર:
            </label>
            <input
              type="text"
              name="whContact"
              placeholder={student.whContact}
              className="w-32"
            />
          </div>
          <div>
            <label htmlFor="dob" className="mr-3">
              જન્મ તારીખ:
            </label>
            <input
              type="text"
              name="dob"
              placeholder={student.dob}
              className="w-32"
            />
            <label htmlFor="bloodGroup" className="ml-3 mr-3">
              બ્લડ ગ્રુપ:
            </label>
            <input
              type="text"
              name="bloodGroup"
              placeholder={student.bloodGroup}
              className="w-32"
            />
            <label htmlFor="lastSchool" className="ml-3 mr-3">
              છેલ્લે અભ્યાસ કરેલ શાળા:
            </label>
            <input
              type="text"
              name="lastSchool"
              placeholder={student.lastSchool}
              className="w-40"
            />
          </div>
          <div>
            <label htmlFor="standard" className="mr-3">
              વર્ગ:
            </label>
            <input
              type="text"
              name="standard"
              placeholder={student.standard}
              className="w-32"
            />
            <label htmlFor="hostel" className="ml-3 mr-3">
              હોસ્ટેલ:
            </label>
            <input
              type="text"
              name="hostel"
              placeholder={student.hostel}
              className="w-40"
            />
            <label htmlFor="hostelRoom" className="ml-3 mr-3">
              હોસ્ટેલ રૂમ:
            </label>
            <input
              type="text"
              name="hostelRoom"
              placeholder={student.hostelRoom}
              className="w-40"
            />
          </div>
          <div>
            <label htmlFor="alergy" className="mr-3">
              કોઈ એલર્જી?:
            </label>
            <input
              type="text"
              name="alergy"
              placeholder={student.alergy}
              className="w-32"
            />
            <label htmlFor="dieces" className="ml-3 mr-3">
              કોઈ રોગ?:
            </label>
            <input
              type="text"
              name="dieces"
              placeholder={student.dieces}
              className="w-40"
            />
          </div>
          <div>
            <label htmlFor="img" className="mr-3">
              પ્રોફાઈલ ફોટો:
            </label>
            <input
              type="text"
              name="img"
              placeholder={student.img}
              className="w-[70%]"
            />
          </div>
          <button>Update Student</button>
        </form>
      </div>
    </div>
  );
};

export default StudentProfilePage;
