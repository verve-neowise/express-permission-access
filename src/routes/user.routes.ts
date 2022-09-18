import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import UserService from '../services/user.service'

const router = Router()
const userService = new UserService(new PrismaClient())

router.get('/', async (req, res) => {
    const users = await userService.findAll()
    res.json(users)
})

router.post('/', async (req, res) => {
    const { name, permissions } = req.body
    const user = await userService.create(name, permissions)
    res.json(user)
})

router.post('/:id/permission', async (req, res) => {
    const id = +req.params.id
    const { permId } = req.body
    const user = await userService.addPermission(id, permId)
    res.json(user)
})

router.get('/:id/permission', async (req, res) => {
    const id = +req.params.id
    const permissions = await userService.userPermissions(id)
    res.json(permissions)
})

export default router
