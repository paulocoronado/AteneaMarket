import express, { Router} from 'express'
import { getCategories } from '../controllers/category/retrieveCategoriesController'
import { handleValidationErrors, validateTotalItems } from '../validators/category/retrieveCategoryValidator'
import dotenv from 'dotenv'

/**
 * Rutas del microservicio Catalog, módulo de Categorías
 * 
 * @author Maidy Cabrera <maidyc914@gmail.com> 
 */


const myRouter:Router= Router()
myRouter.get('/:totalItems',  validateTotalItems, handleValidationErrors, getCategories)
myRouter.get('/',  validateTotalItems, handleValidationErrors, getCategories)
export default myRouter