import swaggerJsdoc from "swagger-jsdoc";
export const swaggerOptions = {
  definition: {
	openapi: "3.0.0",
	info: {
        title: "API de Ejemplo",
        version: "1.0.0",
        description: "Una API de ejemplo.",
	},
	servers: [{ url: "http://localhost:3001", description: "Servidor local para el microservicio de Catálogo" }],
  },
  apis: ["./src/index.ts", "./swagger/*.swagger.yaml"],
};
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
