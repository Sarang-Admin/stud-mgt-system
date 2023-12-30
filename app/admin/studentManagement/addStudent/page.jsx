import React from "react";
import styles from "../../../ui/dashboard/students/addStudent.module.css";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { addStudent } from "../../../lib/studentActions";

const AddStudentPage = () => {
  return (
    <div className={styles.container}>
      <form action={addStudent} className={styles.form}>
        <Input
          type=""
          label="વિદ્યાર્થીનો યુનિક આઈડી"
          name="studentID"
          isRequired
          className="mt-8 w-[30%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
        />
        <Input
          type=""
          label="જી.આર. નંબર"
          name="grNumber"
          isRequired
          className="mt-8 w-[30%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
        />
        <Input
          type=""
          label="એડમિશન લીધાની તારીખ"
          name="admissionDate"
          isRequired
          className="mt-8 w-[30%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="અટક"
          name="firstname"
          isRequired
          className="block w-[20%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="નામ"
          name="lastname"
          isRequired
          className="block w-[20%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="પિતાનું નામ"
          name="fathername"
          isRequired
          className="block w-[20%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="માતાનું નામ"
          name="mothername"
          isRequired
          className="block w-[20%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Textarea label="સરનામું" className=" w-[90%]" isRequired />
        <Input
          type=""
          label="શહેર/ગામનું નામ"
          name="city"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="રાજ્યનું નામ"
          name="state"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="પીનકોડ"
          name="pincode"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="મોબાઈલ નંબર"
          name="contact"
          isRequired
          className="mt-8 w-[20%]"
        />
        <Input
          type=""
          label="વાલીનો મોબાઈલ નંબર"
          name="ParentContact"
          isRequired
          className="mt-8 w-[20%]"
        />
        <Input
          type=""
          label="WhatsApp નંબર"
          name="whContact"
          isRequired
          className="mt-8 w-[20%]"
        />
        <Input
          type=""
          label="પાસવર્ડ"
          name="password"
          isRequired
          className="mt-8 w-[20%]"
        />
        <Input
          type=""
          label="જન્મ તારીખ"
          name="dob"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="બ્લડ ગ્રુપ"
          name="bloodGroup"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="છેલ્લે અભ્યાસ કરેલ શાળા"
          name="lastSchool"
          isRequired
          className="mt-8 w-[30%]"
        />
        <select
          name="isSatsangi"
          id="isSatsangi"
          className="block w-[20%] mt-8 text-gray-900"
        >
          <option value={false}>સત્સંગી છે?</option>
          <option value={true}>હા</option>
          <option value={false}>ના</option>
        </select>
        <Input
          type="text"
          label="નજીકનું મંદિર"
          name="nearTemple"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type="text"
          label="ફીની રકમ"
          name="fees"
          isRequired
          className="mt-8 w-[30%]"
        />
        <select
          name="standard"
          id="standard"
          className="w-[20%] mt-8 ml-3 text-gray-900"
        >
          <option>વર્ગ</option>
          <option value="7 A">7 A</option>
          <option value="11 Science">11 Science</option>
        </select>
        <select
          name="hostel"
          id="hostel"
          className="w-[20%] mt-8 text-gray-900"
        >
          <option value="">હોસ્ટેલ</option>
          <option value="Shreeji Nivas">Shreeji Nivas</option>
          <option value="Shree Hari Nivas">Shree Hari Nivas</option>
        </select>
        <select
          name="hostelRoom"
          id="hostelRoom"
          className="w-[20%] mt-7 text-gray-900"
        >
          <option value={0}>હોસ્ટેલ રૂમ</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
        <Input
          type="text"
          label="કોઈ એલર્જી?"
          name="alergy"
          isRequired
          className="block w-[20%]  mt-8 text-gray-900  sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="કોઈ રોગ?"
          name="dieces"
          isRequired
          className="block w-[20%]  mt-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <select
          name="isDish"
          id="isDish"
          className="block w-[20%] mt-8 text-gray-900"
        >
          <option value={false}>ડીશ લીધેલ છે?</option>
          <option value={true}>હા</option>
          <option value={false}>ના</option>
        </select>
        <select
          name="isBed,"
          id="isBed,"
          className="block w-[20%] mt-8 text-gray-900"
        >
          <option value={false}>બેડિંગ લીધેલ છે?</option>
          <option value={true}>હા</option>
          <option value={false}>ના</option>
        </select>
        <Input label="પ્રોફાઈલ ફોટો" className=" w-[90%] mt-5" name="img" />
        <Button type="submit" color="primary" className="mt-8 w-[50%]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddStudentPage;
