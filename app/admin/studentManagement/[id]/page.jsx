import React from "react";
import styles from "../studentProfile.module.css";
import Image from "next/image";
import { fetchStudent } from "@/app/lib/data";
import { updateStudent } from "@/app/lib/studentActions";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

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
          {student.lastname} {student.firstname}
        </div>{" "}
        <br />
        <div className="mt-5 text-xl ml-5">{student.studentID}</div>{" "}
      </div>
      <div className={styles.formContainer}>
        <form action={updateStudent} className={styles.form}>
          <Input
            type=""
            label="વિદ્યાર્થીનો યુનિક આઈડી"
            name="studentID"
            className="mt-8 w-[30%] mb-8 text-gray-900"
            placeholder={student.studentID}
          />
          <Input
            type=""
            label="જી.આર. નંબર"
            name="grNumber"
            className="mt-8 w-[30%] mb-8 text-gray-900"
            placeholder={student.grNumber}
          />
          <Input
            type=""
            label="એડમિશન લીધાની તારીખ"
            name="admissionDate"
            className="mt-8 w-[30%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
            placeholder={student.admissionDate}
          />
          <Input
            type="text"
            label="અટક"
            name="firstname"
            className="block w-[20%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
            placeholder={student.firstname}
          />
          <Input
            type="text"
            label="નામ"
            name="lastname"
            className="block w-[20%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
            placeholder={student.lastname}
          />
          <Input
            type="text"
            label="પિતાનું નામ"
            name="fathername"
            className="block w-[20%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
            placeholder={student.fathername}
          />
          <Input
            type="text"
            label="માતાનું નામ"
            name="mothername"
            className="block w-[20%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
            placeholder={student.mothername}
          />
          <Textarea
            label="સરનામું"
            name="address"
            className=" w-[90%]"
            placeholder={student.address}
          />
          <Input
            type=""
            label="શહેર/ગામનું નામ"
            name="city"
            className="mt-8 w-[30%]"
            placeholder={student.city}
          />
          <Input
            type=""
            label="રાજ્યનું નામ"
            name="state"
            className="mt-8 w-[30%]"
            placeholder={student.state}
          />
          <Input
            type=""
            label="પીનકોડ"
            name="pincode"
            className="mt-8 w-[30%]"
            placeholder={student.pincode}
          />
          <Input
            type=""
            label="મોબાઈલ નંબર"
            name="contact"
            className="mt-8 w-[20%]"
            placeholder={student.contact}
          />
          <Input
            type=""
            label="વાલીનો મોબાઈલ નંબર"
            name="ParentContact"
            className="mt-8 w-[20%]"
            placeholder={student.parentContact}
          />
          <Input
            type=""
            label="WhatsApp નંબર"
            name="whContact"
            className="mt-8 w-[20%]"
            placeholder={student.whContact}
          />
          <Input
            type=""
            label="પાસવર્ડ"
            name="password"
            className="mt-8 w-[20%]"
            placeholder={student.password}
          />
          <Input
            type=""
            label="જન્મ તારીખ"
            name="dob"
            className="mt-8 w-[30%]"
            placeholder={student.dob}
          />
          <Input
            type=""
            label="બ્લડ ગ્રુપ"
            name="bloodGroup"
            className="mt-8 w-[30%]"
            placeholder={student.bloodGroup}
          />
          <Input
            type=""
            label="છેલ્લે અભ્યાસ કરેલ શાળા"
            name="lastSchool"
            className="mt-8 w-[30%]"
            placeholder={student.lastSchool}
          />
          <select
            name="isSatsangi"
            id="isSatsangi"
            className="block w-[20%] mt-8 text-gray-900"
            label="સત્સંગી છે?"
          >
            <option value={false}>સત્સંગી છે?</option>
            <option value={true} selected={student.isSatsangi}>
              હા
            </option>
            <option value={false} selected={student.isSatsangi}>
              ના
            </option>
          </select>
          <Input
            type="text"
            label="નજીકનું મંદિર"
            name="nearTemple"
            className="mt-8 w-[30%]"
            placeholder={student.nearTemple}
          />
          <Input
            type="text"
            label="ફીની રકમ"
            name="fees"
            className="mt-8 w-[30%]"
            placeholder={student.fees}
          />
          <select
            name="standard"
            id="standard"
            className="w-[20%] mt-8 ml-3 text-gray-900"
          >
            <option>વર્ગ</option>
            <option value="7" selected={student.standard}>
              7
            </option>
            <option value="11 Science" selected={student.standard}>
              11 Science
            </option>
          </select>
          <select
            name="hostel"
            id="hostel"
            className="w-[20%] mt-8 text-gray-900"
          >
            <option value="">હોસ્ટેલ</option>
            <option value="Shreeji Nivas" selected={student.hostel}>
              Shreeji Nivas
            </option>
            <option value="Shree Hari Nivas" selected={student.hostel}>
              Shree Hari Nivas
            </option>
          </select>
          <select
            name="hostelRoom"
            id="hostelRoom"
            className="w-[20%] mt-7 text-gray-900"
          >
            <option value={0}>હોસ્ટેલ રૂમ</option>
            <option value="1" selected={student.hostelRoom}>
              1
            </option>
            <option value="2" selected={student.hostelRoom}>
              2
            </option>
          </select>
          <Input
            type="text"
            label="કોઈ એલર્જી?"
            name="alergy"
            className="block w-[20%]  mt-8 text-gray-900  sm:text-sm sm:leading-6"
            placeholder={student.alergy}
          />
          <Input
            type="text"
            label="કોઈ રોગ?"
            name="dieces"
            className="block w-[20%]  mt-8 text-gray-900 sm:text-sm sm:leading-6"
            placeholder={student.dieces}
          />
          <select
            name="isDish"
            id="isDish"
            className="block w-[20%] mt-8 text-gray-900"
          >
            <option>ડીશ લીધેલ છે?</option>
            <option value={true} selected={student.isDish}>
              હા
            </option>
            <option value={false} selected={student.isDish}>
              ના
            </option>
          </select>
          <select
            name="isBed,"
            id="isBed,"
            className="block w-[20%] mt-8 text-gray-900"
          >
            <option>બેડિંગ લીધેલ છે?</option>
            <option value={true} selected={student.isBed}>
              હા
            </option>
            <option value={false} selected={student.isBed}>
              ના
            </option>
          </select>
          <Input label="પ્રોફાઈલ ફોટો" className=" w-[90%] mt-5" name="img" />
          <Button type="submit" color="primary" className="mt-8 w-[50%]">
            Update Student
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StudentProfilePage;
