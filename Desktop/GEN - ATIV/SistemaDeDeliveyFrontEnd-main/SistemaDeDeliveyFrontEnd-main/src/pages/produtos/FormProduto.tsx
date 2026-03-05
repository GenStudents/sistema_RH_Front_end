import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Produto } from "../../models/Produto"
import { cadastrar, atualizar, buscar } from "../../service/service"
import { AuthContext } from "../../contestx/AuthContext"

function FormProduto() {

  const navigate = useNavigate()
  const { id } = useParams()
  const { usuario } = useContext(AuthContext)
  const token = usuario.token

  const [produto, setProduto] = useState<Produto>({
    nome: "",
    descricao: "",
    preco: 0,
    disponivel: true
  })

  const header = {
    headers: {
      Authorization: token
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscar(`/produtos/${id}`, setProduto, header)
    }
  }, [id])

  function atualizarEstado(e: any) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovoProduto(e: any) {
    e.preventDefault()

    if (id !== undefined) {
      await atualizar("/produtos", produto, setProduto, header)
    } else {
      await cadastrar("/produtos", produto, setProduto, header)
    }

    navigate("/produtos")
  }

  return (
    <form onSubmit={gerarNovoProduto}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={produto.nome}
        onChange={atualizarEstado}
      />

      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={produto.descricao}
        onChange={atualizarEstado}
      />

      <input
        type="number"
        name="preco"
        value={produto.preco}
        onChange={atualizarEstado}
      />

      <button type="submit">
        {id ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  )
}

export default FormProduto