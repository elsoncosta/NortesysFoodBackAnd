import { PlanoItem } from "./PlanoItem"

export interface Plano {
  $id: string
  id_grade_gpl: string
  st_nome_gpl: string
  fl_visivel_gpl: string
  fl_desativado_gpl: string
  resumo: PlanoItem[]
}
