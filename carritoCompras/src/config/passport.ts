import { Strategy, ExtractJwt } from "passport-jwt"

// Opciones para la estrategia de autenticación
const opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY    
}

// Configuración de la estrategia de autenticación con JWT
const strategy:Strategy = new Strategy(
    // Se pasan las opciones para la estrategia
    opts, 
    // Función que se ejecuta al autenticar con JWT
    (payload:any,done:any)=>{
        // Se crea un objeto con los datos del usuario autenticado
        const usuarios={
            id:payload.correo
        }
        // Si el usuario existe, se devuelve el objeto y se autentica
        if(usuarios){
            return done(null,usuarios)
        }else{
            // Si no existe, se devuelve un error y no se autentica
            return done(null,false)
        }
    }
)

// Se exporta la estrategia de autenticación
export default strategy
