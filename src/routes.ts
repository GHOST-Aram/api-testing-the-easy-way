import { Router } from "express";
import { home, index } from "./controller";

const router = Router()

router.get('/home', home)

router.get('/', index)

export {router}