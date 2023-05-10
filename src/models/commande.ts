import { Schema, model } from "mongoose";
import Commande from "../types/Commande";

const commandeSchema = new Schema<Commande>({
  productId: {
    type: Number,
    required: true
  },
  dateCommande: {
    type: Date,
    required: true
  },
  quantite: {
    type: Number,
    required: true
  },
  commandePayee: {
    type: Boolean,
    required: true
  }
});

const Commande = model<Commande>('Commande', commandeSchema);

export default Commande;