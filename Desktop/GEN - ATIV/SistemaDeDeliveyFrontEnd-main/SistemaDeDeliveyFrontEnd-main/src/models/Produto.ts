export interface Produto {
  id?: number
  nome: string
  descricao: string
  preco: number
  disponivel: boolean
  categoria?: {
    id?: number
    nome?: string
  }
}