import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonDetails } from "../../api/pokemon"
import { Status } from "../../components/Status"
import { Container, Image, Name, PokemonCard, StatusContainer, StatusTitle, Type } from "./styles"

export const Details = () => {
  const params = useParams()
  const [pokemon, setPokemon] = useState()

  const handleGetPokemon = async () => {
    const data = await getPokemonDetails(params.id)

    setPokemon(data)
  }

  useEffect(() => {
    handleGetPokemon()
  }, [])

  return (
    <Container>
      <PokemonCard>
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon-image" />

        <Name>Bulbasaur</Name>

        <Type>Grass</Type>
        <Type>Poison</Type>
      </PokemonCard>

      <StatusContainer>
        <StatusTitle>Status</StatusTitle>

        <Status />

        <Status />

        <Status />
      </StatusContainer>
    </Container>
  )
}