//IMPORTACIONES
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
//CONFIGURACIÓN DEL DOTENV
dotenv.config();
//CONFIGURANDO PUERTO DEL ENVIROMENT
const PORT: number = parseInt(process.env.PORT as string, 10);
//CONFIGURANDO EXPRESS
const app = express();
/**
 * CONFIGURACIONES 
 *       DE
 *   APLICACIÓN
 */
//HELMET  PARA SEGURIDAD DE HEADERS (1)DNS Prefetch Control(2)Frameguard(3)Hide Powered-By(4)HSTS(5)IE No OpeN(6)Don't Sniff Mimetype(7)XSS Filter.[HAT 14 DISPLONIBLES]
app.use(helmet());
//PERMITE EL CROSS REQUEST
app.use(cors());
//PARSEO A JSON DE EXPRESS
app.use(express.json());
//CONFIGURANDO EL PUERTO DE LA APLICACIÓN
app.set("port", PORT || 3000);
//INICIANDO LA APLICACIÓN
//ROUTES
const version = process.env.VERSION;
const mainRoutes = require('./stripe/paymentHandler');
app.use(mainRoutes);
app.use(`${version}/subscription`,require('./stripe/suscriptions'));
app.use(`${version}/client`,require('./stripe/clients'));
app.use(`${version}/paymentMethod`,require('./stripe/paymentMethods'));
app.use(`${version}/subscriptionItem`,require('./stripe/subscriptionItems'));
app.listen(app.get("port"),()=>{console.log("Server on port", app.get("port"));});
