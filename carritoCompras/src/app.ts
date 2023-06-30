/**
 * Archivo principal del programa
 */

import express, {Application, Request, Response, NextFunction} from 'express'

import cartRoutes from './routes/cartRoutes'
import authRouter from './routes/authRouter'
import strategy from './config/passport'
import passport from 'passport'


const app:Application = express()

app.use(express.json())

/**
 * Agregar al stack un conjunto de rutas
 * 
 */
app.use("/",authRouter)
		// Configura passport para usar la estrategia de autenticación especificada en la variable 'strategy'
passport.use(strategy)
		// Configura la aplicación para usar el middleware de autenticación de passport. Este middleware inicializa el objeto de autenticación de passport en cada solicitud.
app.use(passport.initialize())
app.use('/',passport.authenticate("jwt",{session:false}), cartRoutes)


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