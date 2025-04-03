import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DscAppMenuServiceBase } from "./base/dscAppMenu.service.base";

@Injectable()
export class DscAppMenuService extends DscAppMenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
