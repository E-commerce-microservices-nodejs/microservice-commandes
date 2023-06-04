import { Document } from "mongoose";

interface OrderType extends Document {
  customer: string;
  orderDate?: Date;
  price: number;
  orderPayed: boolean;
}
export default OrderType;