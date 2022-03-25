import { Imagen } from "./imagen"

export interface Produto {
  $id: string
  nome: string
  descricao: string
  descricaoLonga: string
  codigoBarra?: string
  idProduto: number
  idIntegracao?: string
  ativo: boolean
  combo: boolean
  visivel: boolean
  servico: boolean
  preco: number
  quantidade: number
  precoPromocional: number
  idLoja: string
  imagens: Imagen[]
  unidade: string
  idUnidadeMedidaPoduto: string
  unidadeMedida: any
  categorias: any[]
  id: string
}
