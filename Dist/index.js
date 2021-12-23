"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//IMPORTACIONES
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
//CONFIGURANDO PUERTO DEL ENVIROMENT
const PORT = parseInt(process.env.PORT, 10);
console.log(process.env.PORT);
//CONFIGURANDO EXPRESS
const app = (0, express_1.default)();
//CONFIGURACIÓN DEL DOTENV
dotenv.config();
/**
 * CONFIGURACIONES
 *       DE
 *   APLICACIÓN
 */
//HELMET  PARA SEGURIDAD DE HEADERS (1)DNS Prefetch Control(2)Frameguard(3)Hide Powered-By(4)HSTS(5)IE No OpeN(6)Don't Sniff Mimetype(7)XSS Filter.[HAT 14 DISPLONIBLES]
app.use((0, helmet_1.default)());
//PERMITE EL CROSS REQUEST
app.use((0, cors_1.default)());
//PARSEO A JSON DE EXPRESS
app.use(express_1.default.json());
//CONFIGURANDO EL PUERTO DE LA APLICACIÓN
app.set("port", PORT || 3000);
//INICIANDO LA APLICACIÓN
app.listen(app.get("port"), () => { console.log("Server on port", app.get("port")); });
