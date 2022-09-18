import { Permission, PrismaClient } from "@prisma/client";

export default class UserService {

    constructor(
        private prisma: PrismaClient
    ) {}
    
    create(name: string, permissions: number[] = []) {

        return this.prisma.user.create({
            data: {
                name,
                permissions: { 
                    connect: permissions.map(permId => {
                        return { id: permId }
                    })
                }
            }
        })
    }

    findUser(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                permissions: true
            }
        })
    }

    findAll() {
        return this.prisma.user.findMany()
    }

    addPermission(id: number, permissionId: number) {
        return this.prisma.user.update({
            where: {
                id
            },
            data: {
                permissions: {
                     connect: { id: permissionId } 
                }
            }
        })
    }

    userPermissions(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                permissions: true
            }
        })
    }
}