/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateWarehouseArgs } from "./CreateWarehouseArgs";
import { UpdateWarehouseArgs } from "./UpdateWarehouseArgs";
import { DeleteWarehouseArgs } from "./DeleteWarehouseArgs";
import { WarehouseFindManyArgs } from "./WarehouseFindManyArgs";
import { WarehouseFindUniqueArgs } from "./WarehouseFindUniqueArgs";
import { Warehouse } from "./Warehouse";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { WarehouseService } from "../warehouse.service";

@graphql.Resolver(() => Warehouse)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WarehouseResolverBase {
  constructor(
    protected readonly service: WarehouseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _warehousesMeta(
    @graphql.Args() args: WarehouseFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [Warehouse])
  async warehouses(
    @graphql.Args() args: WarehouseFindManyArgs
  ): Promise<Warehouse[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Warehouse, { nullable: true })
  async warehouse(
    @graphql.Args() args: WarehouseFindUniqueArgs
  ): Promise<Warehouse | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => Warehouse)
  async createWarehouse(
    @graphql.Args() args: CreateWarehouseArgs
  ): Promise<Warehouse> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @Public()
  @graphql.Mutation(() => Warehouse)
  async updateWarehouse(
    @graphql.Args() args: UpdateWarehouseArgs
  ): Promise<Warehouse | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Warehouse)
  @nestAccessControl.UseRoles({
    resource: "Warehouse",
    action: "delete",
    possession: "any",
  })
  async deleteWarehouse(
    @graphql.Args() args: DeleteWarehouseArgs
  ): Promise<Warehouse | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Parent() parent: Warehouse,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
