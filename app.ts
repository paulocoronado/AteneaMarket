/**
 * Archivo principal del microservicio de Catálogo
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */

import express, {Application, Request, Response, NextFunction} from 'express'

import catalogRoutes from './routes/catalogRoutes'

import dotenv from 'dotenv'
dotenv.config()
import strategy from "./config/passport"
import passport from "passport"  //aqui
import cors from 'cors'
import authRouter from "./routes/authRouter"
import categoryRoutes from './routes/categoryRoutes'
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';


dotenv.config() //aqui

const app:Application = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json())

// ALERTA: Para toda petición.
//Debería limitar los orígenes con los que puede establecer relaciones de confianza
app.use(cors())
app.use('/',authRouter)
passport.use(strategy)
app.use(passport.initialize()) 
app.use('/',passport.authenticate('jwt',{session:false}) ,catalogRoutes)
app.use('/',passport.authenticate('jwt',{session:false}) ,categoryRoutes)
/**
 * Agregar al stack un conjunto de rutas
 * 
 */
app.use('/', catalogRoutes)
app.use('/category', categoryRoutes)


/**
 * Respuesta cuando la ruta no existe
 */
app.use(
    (req:Request, res:Response, next:NextFunction )=>{

        res.status(404)
        res.json({message:"Upss. El recurso no existe"})

    }
)

/**
 * Respuesta cuando existe un error del servidor
*/

app.use(
    (error:Error, req:Request, res:Response, next:NextFunction)=>{
        
        res.status(500)
        console.log(error)
        res.json({message:"Houston tenemos un problema!!"})
    }
)



export default app