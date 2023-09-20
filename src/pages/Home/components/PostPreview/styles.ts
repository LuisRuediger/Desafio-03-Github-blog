import styled from 'styled-components'

export const PostPreviewContainer = styled.ul`
  list-style: none;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  li {
    padding: 2rem;
    border-radius: 10px;
    background: ${(props) => props.theme['base-post']};
    border: 2px solid transparent;
    transition: all 0.2s ease-in;

    &:hover {
      border: 2px solid ${(props) => props.theme['base-label']};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-title']};

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  div {
    display: flex;
  }

  h2 {
    width: 17.6875rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    line-height: 160%;
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
