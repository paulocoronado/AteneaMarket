import express, { Router} from 'express'
import {addProductToCart, getCartProducts } from '../controllers/cartControllers'

/**
 * Rutas del microservicio Carrito de Compras
 * 
 * @author Maidy Cabrera <maidyc914@gmail.com> 
 */

const myRouter:Router= Router()

myRouter.get('/', getCartProducts)
myRouter.post('/', addProductToCart)

export default myRouter