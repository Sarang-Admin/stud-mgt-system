import styles from "./addProducts.module.css";
import { addProducts } from "../../../lib/storeActions";

export default function AddProducts() {
  return (
    <div className={styles.container}>
      <form action={addProducts} className={styles.form}>
        <div className="w-[45%]">
          <label htmlFor="serialNo" className="mr-3">
            Serial Number
          </label>
          <input type="text" name="serialNo" id="serialNo" />
        </div>
        <div className="w-[45%]">
          <label htmlFor="productName" className="mr-3">
            Product Name
          </label>
          <input type="text" name="productName" id="productName" />
        </div>
        <div className="w-[45%]">
          <label htmlFor="quantity" className="mr-3">
            Quantity
          </label>
          <input type="text" name="quantity" id="quantity" />
        </div>
        <div className="w-[45%]">
          <label htmlFor="price" className="mr-3">
            Price
          </label>
          <input type="text" name="price" id="price" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
