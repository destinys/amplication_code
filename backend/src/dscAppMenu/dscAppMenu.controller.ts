import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DscAppMenuService } from "./dscAppMenu.service";
import { DscAppMenuControllerBase } from "./base/dscAppMenu.controller.base";

@swagger.ApiTags("dscAppMenus")
@common.Controller("dscAppMenus")
export class DscAppMenuController extends DscAppMenuControllerBase {
  constructor(
    protected readonly service: DscAppMenuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
