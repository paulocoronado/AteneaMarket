/**
 * Archivo principal del microservicio de Catálogo
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */
import dotenv from 'dotenv';
dotenv.config();
import express, {Application, Request, Response, NextFunction} from 'express'
import passport from 'passport';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';
import categoryRoutes from './routes/categoryRoutes'
import catalogRoutes from './routes/catalogRoutes'
import authRoutes from './routes/auth.route';
import myStrategy from './config/passport';



const app:Application = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json())

// ALERTA: Para toda petición.
//Debería limitar los orígenes con los que puede establecer relaciones de confianza
app.use(cors())

/**
 * Agregar al stack un conjunto de rutas
 * 
 */
app.use('/security',authRoutes)
// Se proteje las rutas con la estrategia de autenticación
passport.use(myStrategy);
app.use(passport.initialize());
app.use('/catalogo',passport.authenticate('jwt',{session:false}), catalogRoutes)
app.use('/category',passport.authenticate('jwt',{session:false}), categoryRoutes)


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