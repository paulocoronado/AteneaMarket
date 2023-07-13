import express, { Router} from 'express'
import { getCategories } from '../controllers/category/retrieveCategoriesController'
import { handleValidationErrors, validateTotalItems } from '../validators/category/retrieveCategoryValidator'

/**
 * Rutas del microservicio Catalog, módulo de Categorías
 * 
 * @author Paulo César Coronado <paulocoronado at udistrital.edu.co> 
 */


const myRouter:Router= Router()
myRouter.get('/:totalItems',  validateTotalItems, handleValidationErrors, getCategories)
myRouter.get('/',  validateTotalItems, handleValidationErrors, getCategories)
export default myRouter