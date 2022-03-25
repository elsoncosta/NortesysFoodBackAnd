import { CarrinhoAdicionalItem } from "./carrinho.adicional.item"

export interface CarrinhoItem {
    id : string
    idCarrinhoItem: number
    idIntegracao: string
    quantidade: number
    valor: number
    index: number
    valorTotal: number
    cancelado: boolean
    nomeProduto: string
    idPedido: string
    mesaId: string
    idProduto: string
    idPrecoProduto: string
    iconeUrlTemp: string
    iconeUrl: string
    adicionais: CarrinhoAdicionalItem[]
}
