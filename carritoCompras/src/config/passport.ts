import { Strategy, ExtractJwt } from "passport-jwt";

const opts={

    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

    secretOrKey: process.env.SECRET_KEY 

}

const miEstrategia:Strategy = new Strategy(

    opts, (payload, done)=>{
        const usuario ={
            id: payload.mail
        }

        if(usuario){

            return done(null,usuario)

        }else{

            return done(null,false)

        }

    }

)




export default miEstrategia