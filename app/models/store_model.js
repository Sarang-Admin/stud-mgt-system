import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    serialNo: {
      type: String,
      min: 3,
      max: 30,
    },
    productName: {
      type: String,
      min: 3,
      max: 50,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Store =
  mongoose.models.Store || mongoose.model("Store", storeSchema);
