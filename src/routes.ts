import { Router } from "express";
import { APIController} from "./controller";

const apiRouter = (controller: APIController) => {
    const router = Router()
    router.post('/item', controller.addNewItem)
    
    router.get('/home', controller.home)
    
    router.get('/', controller.index)
    
    return router
}
export {apiRouter}
