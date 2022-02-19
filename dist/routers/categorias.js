"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerCategorias = express_1.default.Router(); //criamos a variavel com o express e depois configuramos ela, logo abaixo
// Endpoint para listar todas as categorias
routerCategorias.get('/categorias', (req, res) => {
    const categoria = [
        {
            id: 1,
            nome: 'Móveis',
            idCategoriaPai: null
        },
        {
            id: 2,
            nome: 'Mesa',
            idCategoriaPai: 1
        },
    ];
    res.json(categoria);
});
exports.default = routerCategorias;
