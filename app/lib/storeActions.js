"use server";
import { revalidatePath } from "next/cache";
import { Store } from "../models/store_model";
import { dbConnect } from "./utils";
import { redirect } from "next/navigation";

export const addProducts = async (FormData) => {
  const { serialNo, productName, quantity, price } =
    Object.fromEntries(FormData);

  try {
    dbConnect();
    const newProduct = new Store({
      serialNo,
      productName,
      quantity,
      price,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add Product!");
  }
  revalidatePath("/admin/consumerStore");
  redirect("/admin/consumerStore");
};

export const deleteProduct = async (FormData) => {
  const { id } = Object.fromEntries(FormData);

  try {
    dbConnect();
    await Store.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product!");
  }
  revalidatePath("/admin/consumerStore");
};
