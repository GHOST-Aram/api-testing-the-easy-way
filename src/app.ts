import express from "express"
import { apiRouter } from "./routes"
import { APIController } from "./controller"
import { APIDAL } from "./data-access"

const apiDAL = new APIDAL()
const controller = new APIController(apiDAL)
const api = express()

api.use(express.urlencoded({ extended: true }))
api.use(express.json())

api.use( apiRouter(controller))