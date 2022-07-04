import { Warehouse as TWarehouse } from "../api/warehouse/Warehouse";

export const WAREHOUSE_TITLE_FIELD = "name";

export const WarehouseTitle = (record: TWarehouse): string => {
  return record.name || record.id;
};
