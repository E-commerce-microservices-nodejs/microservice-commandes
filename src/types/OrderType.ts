import { Document } from "mongoose";

interface OrderType extends Document {
<<<<<<< HEAD
  productId: number;
  orderDate: Date;
  quantity: number;
=======
  customer: string;
  orderDate?: Date;
  price: number;
>>>>>>> ff692879dc4f41afaba3f990acf71423151527ea
  orderPayed: boolean;
}
export default OrderType;