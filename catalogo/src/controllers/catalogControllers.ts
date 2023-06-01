
/**
 * Lógica de negocio para el microservicio carrito de Compras
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */


import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma= new PrismaClient()

export const getProductInventory =async (req:Request, res:Response)=>{

    //TO DO: Utilizar el valor que envía el usuario
    try{
        const productInventory= await prisma.product.findUnique(
            {
                where:{
                    id:1
                }
            }
        )
        res.json(productInventory)
    }catch(error){
        console.error("Ocurrió un error", error)
        res.status(503)
        res.json({error:'Service Unavailable'})
    }
    
}


