import { PrismaClient } from "@prisma/client";

export default class PermissionService {

    constructor(
        private prisma: PrismaClient
    ) {}

    create(name: string) {
        return this.prisma.permission.create({
            data: {
                name
            }
        })
    }

    findAll() {
        return this.prisma.permission.findMany()
    }
}