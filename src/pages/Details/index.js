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

    console.log(data)

    setPokemon(data)
  }

  useEffect(() => {
    handleGetPokemon()
  }, [])

  if (!pokemon) {
    return <h3>Carregando detalhes...</h3>
  }

  return (
    <Container>
      <PokemonCard>
        <Image src={pokemon.sprites.front_default} alt="pokemon-image" />

        <Name>{pokemon.name}</Name>

        {pokemon.types.map(type => {
          return (
            <Type key={type.slot} >{type.type.name}</Type>
          )
        })}
      </PokemonCard>

      <StatusContainer>
        <StatusTitle>Status</StatusTitle>

        {pokemon.stats.map(stat => {
          return (
            <Status name={stat.stat.name} value={stat.base_stat} />
          )
        })}
      </StatusContainer>
    </Container>
  )
}