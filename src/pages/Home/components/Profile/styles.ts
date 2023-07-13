import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      color: ${(props) => props.theme['base-title']};

      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
    }

    a {
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;
      transition: 0.4s;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }

      &:hover {
        border-color: ${(props) => props.theme.blue};
      }
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-text']};

    font-weight: 400;
    line-height: 160%;
  }
`

export const LinksContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  a {
    color: ${(props) => props.theme['base-subtitle']};
    text-decoration: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;

      color: ${(props) => props.theme['base-label']};
    }
  }
`
