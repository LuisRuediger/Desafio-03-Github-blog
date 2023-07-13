import styled from 'styled-components'
import headerBackground from '../../assets/header-background.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBackground}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;

  img {
    margin-bottom: 5.5rem;
  }
`
