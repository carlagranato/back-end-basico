import express from "express"
import Categoria from "../models/categoria"

const routerCategorias = express.Router() //criamos a variavel com o express e depois configuramos ela, logo abaixo

// Endpoint para listar todas as categorias
routerCategorias.get('/categorias', (req, res) => {
	const categoria: Categoria[] = [
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

	]

	res.json(categoria)
})

export default routerCategorias