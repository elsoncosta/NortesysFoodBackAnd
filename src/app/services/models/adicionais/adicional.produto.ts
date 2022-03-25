import { AdicionalGrupo } from "./adicional.grupo"

export interface AdicionalProduto {
  $id: string
  idAdicionalProduto: number
  idIntegracao: any
  ativo: boolean
  preco: number
  precoPromocional: number
  quantidade: number
  isChecked: boolean
  idAdicionalGrupo: string
  adicionalGrupo: AdicionalGrupo
  idProduto: string
  id: string
}
