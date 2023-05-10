import express, { NextFunction, Request, Response } from "express";
import Commande from "../../models/commande";
import { CastError, Error } from "mongoose";

const router = express.Router();

router.get("/", (req:Request, res:Response) => {
  Commande.find()
    .then((commandes) => {
      if (commandes.length === 0) {
        res.status(204);
        res.json({ message: "no commandes exists" });
      }
      res.json(commandes);
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error.message });
    });
});
router.get("/:id",(req: Request, res: Response) => {

  const commandeId = req.params.id;
  Commande.findById(commandeId).then((commande)=>{

     if (!commande) {
      res.status(404).send({ message: `Commande of id ${commandeId} doesn't exist` });
    } else {
      res.json(commande);
    }
  }).catch((error:any)=>{
    res.status(500).json({ error: error.message });
  }

  )
}
  )

   
  

router.post("/", (req: Request, res: Response) => {
  const newCommande = new Commande({
   ...req.body
  });
  newCommande
    .save()
    .then((commande) => {
      res.status(201).json({ message: "Commande added successfully", commande });
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error.message });
    });
});

router.put("/:id", (req: Request, res: Response, next:NextFunction) => {
  Commande.findByIdAndUpdate(req.params.id, req.body)
    .then(() => Commande.findById(req.params.id))
    .then((commande) => res.send(commande))
    .catch(next);
});

router.delete("/:id", (req: Request, res: Response) => {
  Commande.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(404);
      res.send({ message: `commande of id ${req.params.id} was deleted` });
    })
    .catch((error: Error) => {
      res.status(500);
      res.send({ message: error.message });
    });
});

export = router;
// export default router
