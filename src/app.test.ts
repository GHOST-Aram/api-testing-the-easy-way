import request from 'supertest'
import { describe, test, expect} from '@jest/globals'
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

describe('POST item', () =>{
    test('Responds with json content', async() =>{
        const response = await request(api).post('/item')
            .send({ title : 'The Book Of Scretes', page: '800'})

        expect(response.headers['content-type']).toMatch(/json/)
    })

    test('Responds with 201 status ', async() =>{
        const response = await request(api).post('/item')
            .send({ title : 'The Book Of Scretes', pages: 800})

        expect(response.status).toEqual(201)
    })

    test('Responds with saved document', async() =>{
        const response = await request(api).post('/item')
            .send({ title : 'The Book Of Scretes', page: '800'})

        expect(response.body).toHaveProperty('item')
        expect(response.body.item).toHaveProperty('__id')
        expect(response.body.item.title).toMatch(/the book of secretes/i)
        expect(response.body.item.pages).toEqual(800)
    })
})

describe('Index Route', () =>{
    test("Responds with 200 status code", async() =>{
        const response = await request(api).get('/home')
        expect(response.status).toEqual(200)
    })

    test("Responds with json content", async() =>{
        const response = await request(api).get('/home')
        expect(response.headers['content-type']).toMatch(/json/)
    })

    test("Returns with \'welcome home\' message", async() =>{
        const response = await request(api).get('/home')
        expect(response.body.message).toMatch(/welcome home/i)
    })
})