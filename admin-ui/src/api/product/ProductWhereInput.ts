import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  warehouse?: WarehouseWhereUniqueInput;
};
