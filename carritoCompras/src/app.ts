/**
 * Archivo principal del programa
 */

import express, {Application, Request, Response, NextFunction} from 'express'

import cartRoutes from './routes/cartRoutes'
import passport from 'passport'
import myStrategy from './config/passport'
import rutas_auth from './routes/authRoutes'

const app:Application = express()

app.use(express.json())
app.use('/auth',rutas_auth)
passport.use(myStrategy)
app.use(passport.initialize())

/**
 * Agregar al stack un conjunto de rutas
 * 
 */
app.use('/',passport.authenticate('jwt', {session:false}),cartRoutes)


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