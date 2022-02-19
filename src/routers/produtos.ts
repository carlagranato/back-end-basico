import express from "express";
import Produto from "../models/produto";

const routerProdutos = express.Router()


routerProdutos.get('/produtos', (req, res) => {
    const produtos: Produto[] = [
        {
            id: 1,
            nome: 'Nintendo 64',
            preco: 1000.00,
            idCategoria: 3,
            descricao: 'Nintendo 64 usado, em bom estado de conservação.',
            urlImagem: '/public/content/produtos/nintendo64.jpg'
        }
    ]

    res.json(produtos)
})

export default routerProdutos