import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WarehouseResolverBase } from "./base/warehouse.resolver.base";
import { Warehouse } from "./base/Warehouse";
import { WarehouseService } from "./warehouse.service";

@graphql.Resolver(() => Warehouse)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WarehouseResolver extends WarehouseResolverBase {
  constructor(
    protected readonly service: WarehouseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
