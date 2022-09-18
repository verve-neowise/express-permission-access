import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()

app.use(cors({
    credentials: true,
    allowedHeaders: '*'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/", router)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Server started on port " + port)
})