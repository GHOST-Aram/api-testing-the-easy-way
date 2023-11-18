import { Request, Response } from "express";
import { APIDAL } from "./data-access";

export class APIController{
    private dal: APIDAL

    constructor(dataAccessLayer: APIDAL){
        this.dal = dataAccessLayer
    }
    public addNewItem = async(req: Request, res: Response) =>{
        const { title, pages } = req.body
    
        const savedItem = await this.dal.createNewItem({ title, pages })
    
        res.status(201).json({ item: savedItem })
    }
    
    public home = (req: Request, res: Response) =>{
        res.status(200).json({message: "Welcome home"})
    }
    public index = (req: Request, res: Response) =>{
        res.status(200).json({ message: 'Welcome to my API' })
    }
}

