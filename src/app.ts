import express from "express"

const api = express()

api.use(express.urlencoded({ extended: true }))
api.use(express.json())

api.get('/', (req, res) =>{
    res.status(200).json({message: 'Welcome to my API'})
})