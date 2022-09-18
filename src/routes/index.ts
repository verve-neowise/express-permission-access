import { Router } from "express";

import permissionRoutes from './permission.routes'
import userRoutes from './user.routes'
import testRoutes from './test.routes'

const router = Router()

router.use('/permissions', permissionRoutes)
router.use('/users', userRoutes)

router.use(testRoutes)

export default router