import { AdicionalGrupo } from "./adicional.grupo"
import { AdicionalProduto } from "./adicional.produto"

export interface Adicional {
  $id: string
  nome: string
  idAdicional: number
  idIntegracao: any
  position: number
  quantidadeMaxima: number
  quantidadeMinima: number
  dividir: boolean
  somarValorMaior: boolean
  adicionalGrupos: AdicionalGrupo[]
  adicionalProdutos: AdicionalProduto[]
  id: string

  ativeTab: boolean
  ativeTabBotton: string
  ativeTabTop: string
}
