import express, { NextFunction, Request, Response } from "express";
import Order from "../../models/OrderModel";
import {  Error } from "mongoose";

const router = express.Router();

router.get("/", (req:Request, res:Response) => {
  Order.find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error.message });
    });
});
router.get("/:id",(req: Request, res: Response) => {

  const orderId = req.params.id;
  Order.findById(orderId).then((order)=>{

     if (!order) {
      res.status(404).send({ message: `Order of id ${orderId} doesn't exist` });
    } else {
      res.json(order);
    }
  }).catch((error:any)=>{
    res.status(500).json({ error: error.message });
  }

  )
}
  )

   
  
router.post("/", (req: Request, res: Response) => {
  const newOrder = new Order({
   ...req.body
  });
  newOrder
    .save()
    .then((order) => {
      res.status(201).json({ message: "Order added successfully", order });
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error.message });
    });
});

router.put("/:id", (req: Request, res: Response, next:NextFunction) => {
  Order.findByIdAndUpdate(req.params.id, req.body)
    .then(() => Order.findById(req.params.id))
    .then((order) => res.send(order))
    .catch(next);
});

router.delete("/:id", (req: Request, res: Response) => {
  Order.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(404);
      res.send({ message: `order of id ${req.params.id} was deleted` });
    })
    .catch((error: Error) => {
      res.status(500);
      res.send({ message: error.message });
    });
});

export = router;
// export default router
