import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #B7322C;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 15px;
    font-size: 22px;
    border-radius: 5px;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
