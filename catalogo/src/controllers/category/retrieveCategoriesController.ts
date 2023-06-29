
/**
 * Lógica de negocio para obtener el inventario de categorías en el microservicio catálogo
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co>
 */
import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma= new PrismaClient()
export const getCategories = async (req:Request, res:Response)=>{

    // Realizar validaciones de los parámetros de entrada usando express-validator
    try{      
        //Cantidad de registros a devolver
        const {totalItems} = req.params    
        

        //Obtener el total de registros en la tabla
        const totalCategories= await prisma.category.count()

        //Validar que el total de registros a devolver no sea mayor al total de registros en la tabla
        if(totalCategories<parseInt(totalItems)){
            res.status(400)
            res.json({error:'totalItems must be less than or equal to '+totalCategories})
            return
        }

         //Consultar listado de categorías organizadas por orden alfabético

        const categories= await prisma.category.findMany(
            {
                orderBy:{
                    name:'asc'
                },
                take:parseInt(totalItems)
            }
        )
        res.json(categories)
    }catch(error){
        console.error("An error has occurred", error)
        res.status(503)
        res.json({error:'An error has occurred. Service Unavailable'})
    }    
}