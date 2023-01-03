import { api } from "."

export const getPokemonList = async () => {
  const response = await api.get('/pokemon?limit=2000')

  return response.data
}