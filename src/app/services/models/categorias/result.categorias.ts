import { Categoria } from "./categoria"

export interface ResultCategorias {
  $id: string
  sucess: boolean
  data: Categoria[]
}
