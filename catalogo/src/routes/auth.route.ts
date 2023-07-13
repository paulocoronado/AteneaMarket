import express,{Router, Request, Response} from 'express'
import { Prisma, PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'

const router : Router = Router()

router.get('/login',
(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const name= req.params.name
    const prisma:PrismaClient=new PrismaClient
				//No colocar datos sensibles o importantes en un JWT
				const payload = {
					id: 'user_id',
					username: '¨rubencho'
				};
				const options = {
					expiresIn: '1h',
				};
				const secretKey = process.env.SECRET_KEY
								
				//Verificar que secretKey sea un string
				if (typeof secretKey === 'string') {
					const token = jwt.sign(payload, secretKey, options);
					res.json(token);
				}
			});


	}



}

export default new AuthRouter().router;