import { PrismaClient } from "@prisma/client"
import { NextFunction, Response, Request } from "express"
import UserService from "../services/user.service"

const userService = new UserService(new PrismaClient())

export default (...permissions: string[]) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        const header = req.header('Authorization')

        if (!header) {
            return res.status(400).json("Id not provided")
        }

        const id = +header

        const user = await userService.findUser(id)

        if (!user) {
            return res.status(400).json("Illegal user id")
        }

        let role = user.role

        for(let permission of permissions) {
            let findPerm = role.permissions.find( (userPermission) => userPermission.name == permission)
            if (!findPerm) {
                return res.status(401).json("permission not found")
            }
        }

        next()
    }
}