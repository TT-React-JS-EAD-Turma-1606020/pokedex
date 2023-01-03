import { useEffect, useState } from "react"
import { getPokemonList } from "../../api/pokemon"
import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import { Container, InputContainer, PokemonContainer } from "./styles"

export const Home = () => {
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {
    const data = await getPokemonList()

    setPokemon(data.results)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Container>
      <InputContainer>
        <Input name='search' label='Busca' />
      </InputContainer>

      <PokemonContainer>
        {pokemon.map(data => {
          return <Card />
        })}
      </PokemonContainer>

    </Container>
  )
}