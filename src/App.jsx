import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import imagenCripto from './assets/imagen-criptos.png'
import Spinner from './components/Spinner'

const Contenido = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 950px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100%;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
const [coin, setCoin]= useState({});
const [resultado, setResultado]= useState({});
const [spinner, setSpinner] = useState(false);
const [showResult, setShowResult] = useState(false);

useEffect(()=>{
  if(Object.keys(coin).length>0){
    const consultaAPI= async ()=>{
      setSpinner(true);
      setShowResult(false);
      const {moneda, criptoMonedas} = coin;
      const URL= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMonedas}&tsyms=${moneda}`;
      const respuesta= await fetch(URL);
      const resultado= await respuesta.json();

      // console.log(respuesta);
      setResultado(resultado.DISPLAY[criptoMonedas][moneda]);
      setSpinner(false);
      setShowResult(true);
      return respuesta
    }

    consultaAPI(); 
  }

},[coin])

  return (
    <Contenido>
      <Imagen src={imagenCripto} alt='imagen de cripto Monedas' />

      <div>
        <Heading>Cotizador de Criptomonedas al instante</Heading>
        <Formulario
          setCoin= {setCoin}
        />
        {spinner && <Spinner />}
        {showResult && <Resultado resultado={resultado}/> }  

      </div>
    
    </Contenido>
  )
}

export default App
