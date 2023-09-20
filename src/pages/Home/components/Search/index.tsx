import { Input, SearchContainer } from './styles'

export function Search() {
  return (
    <>
      <SearchContainer>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>

        <Input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>
    </>
  )
}
