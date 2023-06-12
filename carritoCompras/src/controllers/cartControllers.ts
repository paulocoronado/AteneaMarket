
/**
 * Lógica de negocio para el microservicio carrito de Compras
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */
import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import {check, validationResult} from 'express-validator'

const prisma= new PrismaClient()

//TO DO: Borrar productos del carrito

export const getCartProducts =async (req:Request, res:Response)=>{    


    const {userId}= req.params

    try{
        const cartProduct= await prisma.cart.findMany(
            {
                where:{
                    userId:parseInt(userId)
                }
            }

        )
        res.json(cartProduct)
    }catch(error){
        console.error("Ocurrió un error", error)
        res.status(503)
        res.json({error:'Service Unavailable'})
    }
    
}

export const addProductToCart=[    
    check('productId').isNumeric().withMessage('El id del producto debe ser un número'),
    check('quantity').isNumeric().withMessage('La cantidad del producto debe ser un número'),
    check('productId').isInt({gt:0}).withMessage('El id del producto debe ser mayor a cero'),
    check('quantity').isInt({gt:0}).withMessage('La cantidad del producto debe ser mayor a cero'),    
    check('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
    async (req:Request, res:Response)=>{    
    
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            res.status(400)
            res.json({errors:errors.array()})
            return
        }

    const {productId, quantity, userId}= req.body
    try{


        const existingProduct= await prisma.cart.findFirst(
            {
                where:{
                    productId:productId,
                    userId:userId
                }
            }
        )

        if(existingProduct){
            //Si existe el producto le suma la cantidad
            const updatedCart= await prisma.cart.update(
                {
                    where:{
                        id:existingProduct.id
                    },
                    data:{
                        quantity:{
                            increment:quantity
                        }
                    }
                }
            )
            res.json(updatedCart)
        }else{

        const cartProduct= await prisma.cart.create(
            {
                data: {
                    productId, 
                    quantity,
                    userId
                }
            }
        )
        res.json(cartProduct)
        }
    }catch(error){
        console.error("No se pudo ingresar el producto al carrito", error)
        res.status(503)
        res.json({error:'Service Unavailable'})
    }
}
]

