<<<<<<< HEAD
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
=======
import { Schema, model } from 'mongoose';
import OrderType from '../types/OrderType';

const orderSchema = new Schema<OrderType>({
  customer: {
    type: String,
    required: true,
  },

  orderDate: {
    type: Date,
    required: false,
    default: Date.now,
  },

  price: {
    type: Number,
    required: true,
  },
  orderPayed: {
    type: Boolean,
    required: true,
  },
>>>>>>> ff692879dc4f41afaba3f990acf71423151527ea
});

const Order = model<OrderType>('Order', orderSchema);

<<<<<<< HEAD
export default Order;
=======
export default Order;
>>>>>>> ff692879dc4f41afaba3f990acf71423151527ea
