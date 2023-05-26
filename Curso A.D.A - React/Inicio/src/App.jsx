import MeuComponente from "./components/MeuComponente"

function App() {
  
  return (
    <div>
    <h1>Olá, Mundo | REACT</h1>
    <MeuComponente/>
    <CardDePrograma image='' titulo='credit suisse' 
    subtitle='Python'/>
    <MeuBotao conteudo='Depois Aqui'/>
    <MeuBotao conteudo='Por fim aqui' idade={2}/>
    </div>
  )
}

function MeuBotao(props) {
  
  return(
    <button>{props.conteudo}</button>
  )
}

export default App
