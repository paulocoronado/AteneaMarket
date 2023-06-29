import express, {Router} from 'express'
import {getCategories} from '../controllers/category/retrieveCategoriesController'


//Crear una instancia de la clase Router
const myRouter:Router= Router()


//Definir la ruta donde voy a obtener el JSON de listado de catergorías
//TO DO: Validar datos de entrada con express-validator
//TO DO: Requerir JWT con passport
//TO DO: Crear las pruebas con jest
//TO DO: Crear la documentación con swagger
myRouter.get('/:totalItems', getCategories)

export default myRouter
