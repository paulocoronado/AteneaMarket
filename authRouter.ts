import express, {Router,Request, Response} from "express"
import { Prisma, PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
const router:Router= Router()



router.get(

    
    '/:id',
    async (req:Request, res:Response)=>{
        const id = parseInt(req.params.id)
        const name= req.params.name
        const prisma:PrismaClient=new PrismaClient
        try {
            const user = await prisma.User.findFirst({
                where: { id: { equals: id} , nombre: {equals: name}}
            })

            if(!user){
                res.status(400).json({ message: "La cédula no existe" })
            }else{
                const payload = {
                    id:user.id,
                    name:user.name
                }

                const options={
                    expiresIn : "1h"
                }

                const secretKey = process.env.SECRET_KEY

                if(typeof secretKey == "string"){
                    const token =jwt.sign(payload,secretKey,options)
                    return res.status(201).json({ message: "Creado exitosamente", token})   
                }   
            }

        } catch (error) {
            res.status(400).json({ message: "Revise la cédula, la introducida no exite" })
            console.log(error)
        } 
    }

)

export default router
