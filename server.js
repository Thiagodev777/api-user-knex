import express from "express"
const server = express()
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"

import router from "./src/routes/routes.js"

server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(cors())

server.use("/", router)

server.listen(8686, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)
