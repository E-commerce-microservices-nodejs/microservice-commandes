import { Document } from "mongoose";

interface Commande extends Document {
  productId: number;
  dateCommande: Date;
  quantite: number;
  commandePayee: boolean;
}
export default Commande;