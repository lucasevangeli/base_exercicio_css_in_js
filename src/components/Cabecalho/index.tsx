//import styles from './Cabecalho.module.css'
import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Title = styled.h1`
  margin: 0;
`

const Cabecalho = () => (
  <Header>
    <Title>EBAC Jobs</Title>
  </Header>
)

export default Cabecalho
