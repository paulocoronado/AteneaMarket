import { PrismaClient } from '@prisma/client'
import {Response,Request} from "express"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

const authCont = async (req:Request, res:Response) =>{
    const {email} = req.body;
        
    try {
        // Busca al usuario con la tarjeta profesional especificada
        const user = await prisma.user.findFirst({
            where: { 
                    email: { equals: email}       
            }
        })

        if (!user) {
            // El usuario no existe
            return res.status(401).json({ message: "Invalid email" });
        }
            const payload = {
                id:user
            }

            const options={
                expiresIn : "1h"
            }

            const secretKey = process.env.SECRET_KEY

            if(typeof secretKey == "string"){
                // Si la clave secreta es una cadena, genera un token JWT y lo devuelve
                const token =jwt.sign(payload,secretKey,options)
                return res.status(201).json({ message: "Created successfull", token})   
            }   
        }catch (error) {
        res.status(500).json({ message: "Internal error" })
    } 
};


export default authCont;