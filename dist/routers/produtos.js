"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerProdutos = express_1.default.Router();
routerProdutos.get('/produtos', (req, res) => {
    const produtos = [
        {
            id: 1,
            nome: 'Nintendo 64',
            preco: 1000.00,
            idCategoria: 3,
            descricao: 'Nintendo 64 usado, em bom estado de conservação.',
            urlImagem: '/public/content/produtos/nintendo64.jpg'
        }
    ];
    res.json(produtos);
});
exports.default = routerProdutos;
