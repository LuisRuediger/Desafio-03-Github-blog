import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      line-height: 160%;
    }

    span {
      display: block;
      font-size: 0.875rem;
      line-height: 160%;
    }
  }
`

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};

  &::placeholder {
    font-size: 1rem;
  }
`
