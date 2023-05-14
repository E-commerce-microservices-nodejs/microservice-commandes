import { Document } from "mongoose";

interface OrderType extends Document {
  productId: number;
  orderDate: Date;
  quantity: number;
  orderPayed: boolean;
}
export default OrderType;