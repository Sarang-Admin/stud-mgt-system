import { Teachers } from "../models/teacher_model";
import { Students } from "../models/student_model";
import { dbConnect } from "./utils";

export const fetchTeachers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    dbConnect();
    const count = await Teachers.find({ firstname: { $regex: regex } }).count();
    const teachers = await Teachers.find({ firstname: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, teachers };
  } catch (err) {
    throw new Error("Failed to fatch Teachers");
  }
};

export const fetchTeacher = async (id) => {
  console.log(id);
  try {
    dbConnect();
    const teacher = await Teachers.findById(id);
    return teacher;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fatch Teacher");
  }
};

export const fetchStudents = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    dbConnect();
    const count = await Students.find({ studentID: { $regex: regex } }).count();
    const students = await Students.find({ studentID: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, students };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fatch Students");
  }
};

export const fetchStudent = async (id) => {
  try {
    dbConnect();
    const student = await Students.findById(id);
    return student;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fatch Student");
  }
};
