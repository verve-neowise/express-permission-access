import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import PermissionService from '../services/permission.service'

const router = Router()
const permissionService = new PermissionService(new PrismaClient())

router.get('/', async (req, res) => {
    const permissions = await permissionService.findAll()
    res.json(permissions)
})

router.post('/', async (req, res) => {
    const { name } = req.body
    const permission = await permissionService.create(name)
    res.json(permission)
})

export default router