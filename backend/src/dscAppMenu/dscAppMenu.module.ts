import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DscAppMenuModuleBase } from "./base/dscAppMenu.module.base";
import { DscAppMenuService } from "./dscAppMenu.service";
import { DscAppMenuController } from "./dscAppMenu.controller";

@Module({
  imports: [DscAppMenuModuleBase, forwardRef(() => AuthModule)],
  controllers: [DscAppMenuController],
  providers: [DscAppMenuService],
  exports: [DscAppMenuService],
})
export class DscAppMenuModule {}
