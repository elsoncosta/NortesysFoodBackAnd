import { AdicionalProduto } from "../../../services/models/adicionais/adicional.produto"

export interface ResultAdiconalProduto {
  $id: string
  sucess: boolean
  data: AdicionalProduto[]
}
