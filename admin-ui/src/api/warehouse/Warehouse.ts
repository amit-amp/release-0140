import { Product } from "../product/Product";

export type Warehouse = {
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
