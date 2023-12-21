import Image from "next/image";
import { fetchStudent } from "@/app/lib/data";
import { updateStudent } from "@/app/lib/studentActions";
import styles from "./icard.module.css";

export default async function StudentIcard({ params }) {
  const { id } = params;
  const student = await fetchStudent(id);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.padding}>
          <div className={styles.font}>
            <div className={styles.companyname}>
              BAPS Vidyamandir,
              <br /> <span className={styles.tab}>Sarangpur</span>
            </div>
            <div className={styles.top}>
              <Image
                src={student.img || "/images/noavatar.png"}
                alt="student"
                height={90}
                width={90}
              />
            </div>
            <div>
              <div className={styles.ename}>
                <p className={styles.p1}>
                  <b>
                    {student.lastname} {student.firstname} {student.fathername}
                  </b>
                </p>
                <p>{student.studentID}</p>
              </div>
              <div className={styles.edetails}>
                <p>
                  <b>Standard: </b>
                  {student.standard}
                </p>
                <p>
                  <b>Hostel: </b>
                  {student.hostel}
                </p>
                <p>
                  <b>Mobile Number: </b>
                  {student.contact}
                </p>
                <p>
                  <b>Birth Date: </b>
                  {student.dob}
                </p>
                <div className={styles.Address}>
                  <b>Address: </b> {student.address}, {student.city}{" "}
                  {student.state} {student.pincode}
                </div>
              </div>
              {/* <div className={styles.signature}>
                <Image
                  src={"/images/Icard/signature.png"}
                  height={80}
                  width={160}
                />
              </div> */}
              <div className={styles.qr}>
                <Image
                  src={"/images/Icard/qr sample.png"}
                  height={120}
                  width={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
