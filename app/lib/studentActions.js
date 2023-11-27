"use server";
import { revalidatePath } from "next/cache";
import { Teachers } from "../models/teacher_model";
import { dbConnect } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Students } from "../models/student_model";

export const addStudent = async (formData) => {
  const {
    studentID,
    grNumber,
    password,
    firstname,
    lastname,
    fathername,
    mothername,
    address,
    contact,
    altContact,
    whContact,
    ParentContact,
    city,
    pincode,
    dob,
    admissionDate,
    bloodGroup,
    lastSchool,
    isSatsangi,
    nearTemple,
    fees,
    alergy,
    dieces,
    standard,
    hostel,
    hostelRoom,
    isDish,
    isBed,
    isActive,
    img,
  } = Object.fromEntries(formData);

  try {
    dbConnect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newStudent = new Students({
      studentID,
      grNumber,
      password: hashedPassword,
      firstname,
      lastname,
      fathername,
      mothername,
      address,
      contact,
      altContact,
      whContact,
      ParentContact,
      city,
      pincode,
      dob,
      admissionDate,
      bloodGroup,
      lastSchool,
      isSatsangi,
      nearTemple,
      fees,
      alergy,
      dieces,
      standard,
      hostel,
      hostelRoom,
      isDish,
      isBed,
      isActive,
      img,
    });
    await newStudent.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create student!");
  }
  revalidatePath("/admin/studentManagement");
  redirect("/admin/studentManagement");
};

export const deleteStudent = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnect();
    await Students.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete student!");
  }
  revalidatePath("/admin/studentManagement");
};

export const updateStudent = async (formData) => {
  const {
    id,
    studentID,
    grNumber,
    password,
    firstname,
    lastname,
    fathername,
    mothername,
    address,
    contact,
    altContact,
    whContact,
    ParentContact,
    city,
    pincode,
    dob,
    admissionDate,
    bloodGroup,
    lastSchool,
    isSatsangi,
    nearTemple,
    fees,
    alergy,
    dieces,
    standard,
    hostel,
    hostelRoom,
    isDish,
    isBed,
    isActive,
    img,
  } = Object.fromEntries(formData);

  try {
    dbConnect();
    const updateFields = {
      studentID,
      grNumber,
      password,
      firstname,
      lastname,
      fathername,
      mothername,
      address,
      contact,
      altContact,
      whContact,
      ParentContact,
      city,
      pincode,
      dob,
      admissionDate,
      bloodGroup,
      lastSchool,
      isSatsangi,
      nearTemple,
      fees,
      alergy,
      dieces,
      standard,
      hostel,
      hostelRoom,
      isDish,
      isBed,
      isActive,
      img,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Students.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update Students!");
  }
  revalidatePath("/admin/studentManagement");
  redirect("/admin/studentManagement");
};
