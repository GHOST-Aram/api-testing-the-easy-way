import { Request, Response } from "express";

export const home = (req: Request, res: Response) =>{
    res.status(200).json({message: "Welcome home"})
}
export const index = (req: Request, res: Response) =>{
    res.status(200).json({ message: 'Welcome to my API' })
}
