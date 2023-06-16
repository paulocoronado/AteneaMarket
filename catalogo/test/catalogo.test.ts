import request from "supertest"
 import app from "../src/app"

test(
    'Debe obtener un código de respuesta erróneo',
    async ()=>{
        //Hacer la petición
        const response= await request(app).get('/rertergre')
        //Definir las afirmaciones (aserciones)
        expect(response.statusCode).toBe(400)                
    }
)

test(
    'Debe obtener un código de respuesta exitoso',
    async ()=>{
        //Hacer la petición
        const response= await request(app).get('/4')
        //Definir las afirmaciones (aserciones)
        expect(response.statusCode).toBe(200)                
    }
)