export interface FormaPagamento {
  idPagamento: number
  idIntegracao: string
  nome: string
  descricao: string
  taxa: number
  ativo: boolean
}
