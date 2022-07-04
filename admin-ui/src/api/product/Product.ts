import { Order } from "../order/Order";
import { Warehouse } from "../warehouse/Warehouse";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
