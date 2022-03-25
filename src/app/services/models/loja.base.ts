import { Cidade } from "./cidade"
import { SeguimentoLoja } from "./seguimento.loja"

export interface Loja {
  $id: string
  nome: string
  telefone: string
  email: string
  observacao?: string
  path: string
  idIntegracao?: string
  descricao: any
  ativa: boolean
  publicada: boolean
  numero: any
  cep?: string
  bairro?: string
  logradouro?: string
  urlLogo?: string
  twitter?: string
  instagram?: string
  facebook?: string
  youTube?: string
  urlLogoTemp?: string
  empresaId: string
  idCidade: string
  cidade: Cidade
  seguimentos: SeguimentoLoja[]
  id: string
}
