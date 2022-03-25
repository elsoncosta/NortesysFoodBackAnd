import { Adicional } from "src/app/services/models/adicionais/Adicional"

export interface ResultAdicional {
  $id: string
  sucess: boolean
  data: Adicional[]
}
