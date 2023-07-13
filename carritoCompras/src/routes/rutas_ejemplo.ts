import express,{Request, Response, Router} from 'express'

const myRouter:Router = Router()

myRouter.get(
    '/',
    (req:Request, res:Response, ) => {
        res.send('Hola plantilla ts')})

myRouter.get(
    '/mensaje/:msg',
    (req:Request, res:Response, ) => {
        const myVar= req.params.msg
        res.send(`He recibido el mensaje de ${myVar}`)})

export default myRouter