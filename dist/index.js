"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const categorias_1 = __importDefault(require("./routers/categorias"));
const produtos_1 = __importDefault(require("./routers/produtos"));
// Porta do servidor
const PORT = process.env.PORT || 4000;
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// App Express
const app = (0, express_1.default)();
// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});
// Endpoint para as rotas de categorias
app.use('/', categorias_1.default);
//Endpoint para rota de produtos
app.use('/', produtos_1.default);
// Cors
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000']
}));
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404);
});
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
