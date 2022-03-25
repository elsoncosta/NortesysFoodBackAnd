import { ClientePedido } from "../clientes/cliente.pedido"
import { FormaPagamento } from "../forma.pagamentos/forma.pagamento"
import { CarrinhoItem } from "./carrinho.itens"

export interface CarrinhPedido {
  descontoOrAcrescimo : number
  valorTotal : number
  valorAcrescimo : number
  valorDesconto : number
  subTotal : number
  id : string
  lojaId : string
  mesaId : string
  idCarrinho : number
  nomeUsuario : string
  celularUsuario : string
  emailUsuario : string
  usuarioId : string

  itens: CarrinhoItem[]
  formaPagamento: FormaPagamento
  // clientePedidos: ClientePedido[]
}
