import { Router } from "express";
import permissionChecker from "../middlewares/permission-check.middleware";

const router = Router()

router.get('/applications', permissionChecker("app"),  (req, res) => {
    res.send("Applications")    
})

router.get('/suggestions', permissionChecker("suggest"), (req, res) => {
    res.send("Suggestions")    
})

router.get('/ceo', permissionChecker("app", "suggest"), (req, res) => {
    res.send("Applications")
})

export default router