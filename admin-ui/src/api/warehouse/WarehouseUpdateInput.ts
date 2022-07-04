import { ProductUpdateManyWithoutWarehousesInput } from "./ProductUpdateManyWithoutWarehousesInput";

export type WarehouseUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutWarehousesInput;
};
