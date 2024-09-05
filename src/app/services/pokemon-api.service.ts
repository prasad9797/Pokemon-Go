import { Injectable } from '@angular/core';
import { PokemonList } from '../interfaces/pokemonList';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private readonly pokemonBaseApi =
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor() {}

  async getPokemonData(): Promise<PokemonList[] | null> {
    try {
      const response = await fetch(this.pokemonBaseApi);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log('Error fetching Pokemon data from server:', error);
      return null;
    }
  }

  async getPokemonThumbnail(pokemonImgUrl: string): Promise<string | null> {
    try {
      const response = await fetch(pokemonImgUrl);
      const data = await response.json();
      console.log(data.sprites.front_default);
      return data.sprites.front_default;
    } catch (error) {
      console.log('Error fetching Pokemon image from server:', error);
      return null;
    }
  }
}
