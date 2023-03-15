import { useState, useEffect} from 'react'
import { monedas } from '../data/monedas'
import Error from './Error'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'


const InputBoton = styled.input`
    width: 100%;
    padding: 10px;
    font-weight: 700 ;
    border: none;
    background-color: #9497ff;
    color: #fff;
    text-transform: uppercase;
    border-radius: 5px;
    font-size: 20px;
    margin-top: 28px;
    transition: background-color .3 ease;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;

    }
`


const Formulario = ({setCoin}) => {

  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas('elige tu Moneda', monedas);
  const [criptoMonedas, SelectCriptoMonedas] = useSelectMonedas('elige tu Cripto Moneda', criptos);

  useEffect(()=>{
    const consultarAPI = async ()=>{
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();

      // console.log(resultado.Data);

      const criptoArray = resultado.Data.map(cripto => {
        const obj = {

          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName

        }
        return obj
      })

      setCriptos(criptoArray);
    }
      consultarAPI();
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault();

    if([moneda, criptoMonedas].includes('')){
      setError(true);  
      return
    }

    setError(false);
    setCoin({moneda, criptoMonedas});
  }

  return (
    <>
    {error && <Error>Todos los campos Son Obligatorios</Error>}
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <SelectCriptoMonedas />

      
      <InputBoton type="submit" value='cotizar' />
    </form>
    </>
  )
}

export default Formulario
