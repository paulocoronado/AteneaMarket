import express, { Router} from 'express'
import {addProductToCart, getCartProducts } from '../controllers/cartControllers'

/**
 * Rutas del microservicio Carrito de Compras
 * 
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co> 
 */

const myRouter:Router= Router()

myRouter.get('/', getCartProducts)
myRouter.post('/', addProductToCart)

export default myRouter