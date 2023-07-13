import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class AuthRouter {
	router: Router;
	// citaController: CitaController;


	constructor() {
		this.router = Router();
		this.routes();
	}

	private routes(): void {
		//Defino la ruta para ingresar y obtener el token
		this.router.get('/login',
			(req: Request, res: Response) => {
				//No colocar datos sensibles o importantes en un JWT
				const payload = {
					id: 'user_id',
					username: 'segundo'
				};
				const options = {
					expiresIn: '1h',
				};
				const secretKey = "holapomodoro";
				//Verificar que secretKey sea un string
				if (typeof secretKey === 'string') {
					const token = jwt.sign(payload, secretKey, options);
					res.json(token);
				}
			});


	}



}

export default new AuthRouter().router;