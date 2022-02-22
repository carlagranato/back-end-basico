import express from "express"
import Categoria from "../models/categoria"
import repositoryCategorias from "../repositories/categorias"

// Essa parte do código vai ser responsável apenas pela COMUNICAÇÃO, ou seja, é essa tela que vai dar erro e etc

const routerCategorias = express.Router() //criamos a variavel com o express e depois configuramos ela, logo abaixo

// Endpoint para listar todas as categorias
routerCategorias.get('/categorias', (req, res) => {
	const categoria: Categoria[] = repositoryCategorias.lerTodas()
	
	res.json(categoria)
})

// Endpoint para listar categorias específicas
routerCategorias.get('/categorias/:id', (req, res) => {
	const id: number = +req.params.id //o + converte string para inteiro
	const categoria: Categoria | null = repositoryCategorias.ler(id)
	
	res.json(categoria)
})

export default routerCategorias