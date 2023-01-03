import { useEffect, useState } from "react"
import { getPokemonList } from "../../api/pokemon"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { Container, InputContainer, PokemonContainer } from "./styles"

export const Home = () => {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  const getPokemon = async () => {
    const data = await getPokemonList()

    const filteredPokemon = data.results.filter(result => {
      return result.name.toUpperCase().includes(search.toUpperCase())
    })

    setPokemon(filteredPokemon)
  }

  const handleSearch = () => {
    getPokemon()
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Container>
      <InputContainer>
        <Input
          name='search'
          label='Busca'
          value={search}
          onChange={event => {
            setSearch(event.target.value)
          }}
        />

        <Button onClick={handleSearch}>Buscar</Button>
      </InputContainer>

      <PokemonContainer>
        {pokemon.map(result => {
          return <Card key={result.name} name={result.name} url={result.url} />
        })}
      </PokemonContainer>

    </Container>
  )
}