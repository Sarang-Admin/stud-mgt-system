import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentID: {
      type: String,
    },
    grNumber: {
      type: String,
    },
    password: {
      type: String,
    },
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
    fathername: {
      type: String,
      min: 3,
      max: 20,
    },
    mothername: {
      type: String,
      min: 3,
      max: 20,
    },
    address: {
      type: String,
    },
    contact: {
      type: String,
    },
    altContact: {
      type: String,
    },
    whContact: {
      type: String,
    },
    parentContact: {
      type: String,
    },

    city: {
      type: String,
      min: 3,
      max: 20,
    },

    pincode: {
      type: String,
      min: 3,
      max: 20,
    },
    dob: {
      type: String,
    },
    admissionDate: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    lastSchool: {
      type: String,
    },
    isSatsangi: {
      type: Boolean,
      default: true,
    },
    nearTemple: {
      type: String,
    },
    fees: {
      type: Number,
    },
    alergy: {
      type: String,
    },
    dieces: {
      type: String,
    },
    standard: {
      type: String,
    },
    hostel: {
      type: String,
    },
    hostelRoom: {
      type: Number,
    },

    isDish: {
      type: Boolean,
      default: true,
    },
    isBed: {
      type: Boolean,
      default: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Students =
  mongoose.models.Students || mongoose.model("Students", studentSchema);
