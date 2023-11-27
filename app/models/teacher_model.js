import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      min: 3,
      max: 20,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
      min: 3,
      max: 20,
    },
    state: {
      type: String,
      min: 3,
      max: 30,
    },
    pincode: {
      type: String,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
      min: 3,
      max: 20,
    },
    degree: {
      type: String,
      min: 3,
      max: 20,
    },
    img: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Teachers =
  mongoose.models.Teachers || mongoose.model("Teachers", teacherSchema);
