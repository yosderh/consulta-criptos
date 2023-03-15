import styled from '@emotion/styled'

const Resultad = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dce0e3;
    font-family: 'Lato', sans-serif ;
    padding: 10px;
    margin-top: 24px;
    border-radius: 10px;
    font-size: 18px;

    span{
        font-weight: 700;
    }

    img{
        width: 30%;
        height: 30%;
        align-self: flex-start;
    }
`
const Precio = styled.p`
    font-size: 24px;
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <Resultad>
        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de la criptomoneda" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <p>Precio mas alto del dia es de: <span>{HIGHDAY}</span></p>
            <p>Precio mas bajo del dia es de: <span>{LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
            <p>ultima Actualizacion: <span>{LASTUPDATE}</span></p>
        </div>
    </Resultad>
  )
}

export default Resultado
