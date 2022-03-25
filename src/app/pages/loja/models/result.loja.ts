import { Loja } from "src/app/services/models/loja.base"

export interface ResultLoja {
  $id: string
  sucess: boolean
  data: Loja
}
