import { NextFunction, Request, Response } from "express";
import {ValidationChain, check, validationResult} from 'express-validator'

//Cadena de validación
// Verificar la variable 
const  validateTotalItems: ValidationChain[]=[
    check("totalItems")
    .isInt({gt:0})
    .withMessage("El total de items debe ser un entero mayor a 0")    
]

//Función de manejo de resultados de validación
const responseToValidation=(req:Request, res:Response, next:NextFunction)=>{
    const errors= validationResult(req)
    if (!errors.isEmpty()){
        res.status(400)
        res.json({error:errors.array()})
        return res
    }
    next()
}

export {responseToValidation, validateTotalItems}