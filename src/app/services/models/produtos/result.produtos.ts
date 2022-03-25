import { Produto } from "./produto"

export interface ResultProdutos {
  $id: string
  sucess: boolean
  data: Produto[]
}
