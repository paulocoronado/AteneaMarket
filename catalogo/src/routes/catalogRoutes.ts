import express, { Router} from 'express'
import {getProductInventory } from '../controllers/catalogControllers'

/**
 * Rutas del microservicio Carrito de Compras
 * 
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co> 
 */

const myRouter:Router= Router()

myRouter.get('/:idProduct', getProductInventory)

export default myRouter