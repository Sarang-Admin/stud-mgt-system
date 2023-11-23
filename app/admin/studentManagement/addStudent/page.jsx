import React from "react";
import styles from "@/app/ui/dashboard/students/addStudent.module.css";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const AddStudentPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <Input
          type="text"
          label="અટક"
          name="firstname"
          isRequired
          className="block w-[45%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="નામ"
          name="lastname"
          isRequired
          className="block w-[45%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="પિતાનું નામ"
          name="fathername"
          isRequired
          className="block w-[45%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="માતાનું નામ"
          name="mothername"
          isRequired
          className="block w-[45%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Textarea label="સરનામું" className="mt-8 w-[90%]" isRequired />
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
          name="mobile"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="વાલીનો મોબાઈલ નંબર"
          name="parent_mobile"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="WhatsApp નંબર"
          name="whatsapp"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Button color="primary" className="mt-8 w-[50%]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddStudentPage;
