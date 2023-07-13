import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"


//Crear una instancia del cliente Prisma

const prisma= new PrismaClient()

export const getCategories= async(req:Request, res:Response)=>{
    try{

        const {totalItems}= req.params

        const total=parseInt(totalItems)

        const categories= await prisma.category.findMany(
            {
                orderBy:{
                    name:'asc'
                },
                take:total
            }
        )
        res.json(categories)

    }catch(error){
        console.log("Ocurrió un error en retrieveCategoriesController")
        res.status(503)
        res.json({error:'Ocurrió un error. El servicio no está disponible'})

    }
}