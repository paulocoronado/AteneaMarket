import request from "supertest"
import app from "../src/app"

//prueba simple: registro exitoso

test(
    'Debe obtener un código de respuesta exitoso',
    async ()=>{
        //Hacer la petición
        const response= await request(app).get('/')
        //Definir las afirmaciones (aserciones)
        expect(response.statusCode).toBe(200)                
    }
)

test(
    'Debe obtener un código de respuesta erróneo',
    //función de collback: asincrono para poder utiliar await dentro del metodo
    async ()=>{
        //Hacer la petición
        const response= await request(app).get('/iolkhfd')
        //Definir las afirmaciones (aserciones)
        expect(response.statusCode).toBe(400)                
    }
)

//metodo post

test(
    'Debe obtener un código de respuesta erróneo en la solicitud POST', 
    async () => {
    // Hacer la petición POST con los datos necesarios
        const response = await request(app).post('/')
        .send({ productName: 'Nombre del producto', quantity: 2 })

    // Definir las afirmaciones (aserciones)
    expect(response.statusCode).toBe(400);
    
  });
  