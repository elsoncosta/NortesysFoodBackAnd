import { Uf } from "./uf"

export interface Cidade {
  $id: string
  nomeCidade: string
  idCidade: number
  idUf: string
  ativo: boolean
  uf: Uf
  idLoja: string
  id: string
}
