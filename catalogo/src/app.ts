/**
 * Archivo principal del microservicio de Catálogo
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */

import express, {Application, Request, Response, NextFunction} from 'express'

import catalogRoutes from './routes/catalogRoutes'

import dotenv from 'dotenv'  //aqui

dotenv.config() //aqui

const app:Application = express()

app.use(express.json())

/**
 * Agregar al stack un conjunto de rutas
 * 
 */
app.use('/', catalogRoutes)


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