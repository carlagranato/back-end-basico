import Categoria from "../models/categoria"
import database from "./database"

const repositoryCategorias = {
    lerTodas: () => {
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
            {
                id: 3,
                nome: 'Colecionáveis',
                idCategoriaPai: null
            },
        ]

        const sql = 'SELECT * FROM categoria'

        database.all(sql, (err, rows) => {
            console.log(rows)
        })
        return categoria
    },
    
    ler: (id: number) => {
        const categorias = repositoryCategorias.lerTodas() // chamamos todas as categorias
        const categoria: Categoria | undefined = categorias.find((categoria) => { return categoria.id === id}) // aqui o find irá percorrer todas as categorias e verificar se o id é igual ao id que eu passar na url

        return categoria ?? null
    }
}

export default repositoryCategorias