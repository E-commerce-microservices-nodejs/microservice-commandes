import { Schema, model } from "mongoose";
import OrderType from "../types/OrderType";

const orderSchema = new Schema<OrderType>({
  customer: {
    type: String,
    required: true
  },
 
  orderDate: {
    type: Date,
    required: false,
    default:Date.now,},
  
  price: {
    type: Number,
    required: true
  },
  orderPayed: {
    type: Boolean,
    required: true
  }
});

const Order = model<OrderType>('Order', orderSchema);

export default Order;