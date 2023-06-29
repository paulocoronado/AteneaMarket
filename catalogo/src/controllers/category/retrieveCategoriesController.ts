import { Request, Response } from "express"

export const getCategories= async(req:Request, res:Response)=>{
    //TO DO: Lógica de consulta a la base de datos
    res.status(200)
    res.json({mensaje:"Hola mundo!!"})    
}