import Accordion from "./Accordion"
const itens = [
  {
    titulo: "Java",
    descricao: "Linguagem compilada e interpretada"
  },
  {
    titulo: "Python",
    descricao: "Linguagem interpretada e dinamicamente tipada"
  },
  {
    titulo: "Javascript",
    descricao: "Interpretada. Executa do lado do cliente e do lado do servidor também"
  }
]
const App = () => {
  return (
    <div>
      <Accordion itens={itens} />
    </div>
  )
}

export default App