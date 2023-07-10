import request from 'supertest'
import app from '../src/app'

describe('Probar la ruta de obtener categorías de la API', 
    ()=>{
        test('Debe retornar un listado de categorías',
        async()=>{
            const response= await request(app).get('/category/3')
            expect(response.status).toBe(200)
            expect(response.body).toBeInstanceOf(Array)
            for(const element of response.body){
                expect(element).toHaveProperty("id")
                expect(element).toHaveProperty("name")
                expect(element).toHaveProperty("title")
            }
        }
        )
        test('Debe retornar un error si el dato ingresa es menor a 0',
        async()=>{
            const response= await request(app).get('/category/-1')    
            expect(response.status).toBe(400)
        })
    }
)
