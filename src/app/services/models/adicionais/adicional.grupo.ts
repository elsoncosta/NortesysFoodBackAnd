import { Produto } from "../produtos/produto"
import { Adicional } from "./Adicional"
import { AdicionalProduto } from "./adicional.produto"

export interface AdicionalGrupo {
  $id: string
  idAdicionalGrupo: number
  idIntegracao: any
  url: string
  ativo: boolean
  urlImgTemp: string
  isCheked: boolean
  idAdicional: string
  adicional: Adicional
  produto: Produto
  adicionalProdutos: AdicionalProduto[]
  id: string
}
