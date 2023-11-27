import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import styles from "./addTeacher.module.css";
import { addTeacher } from "@/app/lib/actions";

const AddTeacherPage = () => {
  return (
    <div className={styles.container}>
      <form action={addTeacher} className={styles.form}>
        <Input
          type="text"
          label="First Name"
          name="firstname"
          isRequired
          className="block w-[45%] mb-8 text-gray-900  sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="Last Name"
          name="lastname"
          isRequired
          className="block w-[45%] mb-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Input
          type="text"
          label="Mobile Number"
          name="phone"
          isRequired
          className="mt-8 w-[20%]"
        />
        <Input
          type="text"
          label="Degree"
          name="degree"
          isRequired
          className="block w-[45%] mb-8 mt-8 text-gray-900 sm:text-sm sm:leading-6"
        />
        <Textarea
          label="Address"
          name="address"
          className="mt-8 w-[90%]"
          isRequired
        />
        <Input
          type=""
          label="City/Village"
          name="city"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="State"
          name="state"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="Pincode"
          name="pincode"
          isRequired
          className="mt-8 w-[30%]"
        />
        <Input
          type=""
          label="Password"
          name="password"
          isRequired
          className="mt-8 w-[20%]"
        />
        <Input
          type=""
          label="Image Source"
          name="img"
          isRequired
          className="mt-8 w-[60%]"
        />

        <Button type="submit" color="primary" className="mt-8 w-[100%] text-lg">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTeacherPage;
