import { api } from "."

export const getPokemonList = async () => {
  const response = await api.get('/pokemon')

  return response.data
}