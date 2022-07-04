import { ProductCreateNestedManyWithoutWarehousesInput } from "./ProductCreateNestedManyWithoutWarehousesInput";

export type WarehouseCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutWarehousesInput;
};
