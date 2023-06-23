
/**
 * Lógica de negocio para obtener el inventario de productos en el microservicio catálogo
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */


import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma= new PrismaClient()

export const getProductsList = async (req:Request, res:Response)=>{

    try{
        //Número de la página
        const {totalItems} = req.params
        let items= parseInt(totalItems)

        //Cantidad de registros de cada página
        const {idPage} = req.params
        let page= parseInt(idPage)

        //TO DO: Veriifcar que los datos estén en un dominio definido

        if(isNaN(items)||isNaN(page)){
            res.status(400)
            res.json({error:'Bad Request'})
            return
        }

        //Consultar listado de productos sin considerar la categoría
        const productsInventory= await prisma.product.findMany(
            {
                skip:(page-1)*items,
                take:items
            }
        )
        res.json(productsInventory)
    }catch(error){
        console.error("Ocurrió un error", error)
        res.status(503)
        res.json({error:'Service Unavailable'})
    }    
}


