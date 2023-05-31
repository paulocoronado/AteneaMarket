
/**
 * Lógica de negocio para el microservicio carrito de Compras
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */


import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma= new PrismaClient()

export const getCartProducts =async (req:Request, res:Response)=>{

    //TO DO: Filtrar los elementos
    try{
        const cartProduct= await prisma.cart.findMany()
        res.json(cartProduct)
    }catch(error){
        console.error("Ocurrió un error", error)
        res.status(503)
        res.json({error:'Service Unavailable'})
    }
    
}


export const addProductToCart=async (req:Request, res:Response)=>{    
    //TO DO: Verificar integridad del json
    const {productId, quantity}= req.body
    try{

        const cartProduct= await prisma.cart.create(
            {
                data: {
                    productId, 
                    quantity
                }
            }
        )
        res.json(cartProduct)
    }catch(error){
        console.error("No se pudo ingresar el producto al carrito", error)
        res.status(503)
        res.json({error:'Service Unavailable'})
    }
}


