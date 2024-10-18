import "./App.css";
import Textos from "./components/Textos";
import BtnComponent from "./components/ButtonCpn";
import ImagesFunction from "./components/ImagesCpn";
import HoraDoDia from  "./components/Horario";
function App() {
  const listaItens = ["React", "NextJS", "Tailwind"]; //esta constante serve para adicionar itens na lista ordenada

  return (
    <>
      <Textos
        titulo="Lista de React 2"
        subtitulo="Atividade da lista de react parte 2"
        paragrafo="Este texto foi elaborado para cumprir os requisitos da lista"
        lista={listaItens}
      /> 
      {/* componente textos */}


      <ImagesFunction
        image="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
        legenda="Imagem da logo do reacy"
      />
      {/* componente imagens */}

      <HoraDoDia/>

      
      <BtnComponent
        btn="Clique aqui"
        link="https://www.linkedin.com/in/matheus-ursino/"
      />
      {/* componente botão */}

    </>
  );
}

export default App;
