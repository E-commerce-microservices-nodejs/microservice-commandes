import { Schema, model } from "mongoose";
import OrderType from "../types/OrderType";

const orderSchema = new Schema<OrderType>({
  productId: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  quantity: {
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