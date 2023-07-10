import express, { Router} from 'express'
import {getProductInventory } from '../controllers/catalogControllers'
import { getProductsList } from '../controllers/listaProductosController'

/**
 * Rutas del microservicio Carrito de Compras
 * 
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co> 
 */

const myRouter:Router= Router()

//TO DO: Crear los scripts de prueba en Jest

myRouter.get('/:idProduct', getProductInventory)
myRouter.get('/page/:idPage/items/:totalItems', getProductsList)

export default myRouter