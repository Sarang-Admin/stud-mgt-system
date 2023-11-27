"use server";
import { revalidatePath } from "next/cache";
import { Teachers } from "../models/teacher_model";
import { dbConnect } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addTeacher = async (FormData) => {
  const {
    firstname,
    lastname,
    phone,
    address,
    city,
    state,
    pincode,
    password,
    degree,
    img,
    isActive,
  } = Object.fromEntries(FormData);

  try {
    dbConnect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newTeacher = new Teachers({
      firstname,
      lastname,
      phone,
      address,
      city,
      state,
      pincode,
      password: hashedPassword,
      degree,
      img,
      isActive,
    });

    await newTeacher.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/admin/teacherManagement");
  redirect("/admin/teacherManagement");
};

export const deleteTeacher = async (FormData) => {
  const { id } = Object.fromEntries(FormData);

  try {
    dbConnect();
    await Teachers.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete teacher!");
  }
  revalidatePath("/admin/teacherManagement");
};

export const updateTeacher = async (FormData) => {
  const {
    id,
    firstname,
    lastname,
    phone,
    address,
    city,
    state,
    pincode,
    password,
    degree,
    img,
    isActive,
  } = Object.fromEntries(FormData);

  try {
    dbConnect();
    const updateFields = {
      firstname,
      lastname,
      phone,
      address,
      city,
      state,
      pincode,
      password,
      degree,
      img,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Teachers.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete teacher!");
  }
  revalidatePath("/admin/teacherManagement");
  redirect("/admin/teacherManagement");
};
