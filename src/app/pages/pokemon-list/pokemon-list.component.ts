import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonList } from '../../interfaces/pokemonList';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  pokemonList!: PokemonList[] | null;
  pokemonImg!: string | null;

  constructor(private pokemonApiService: PokemonApiService) {}

  async ngOnInit() {
    this.pokemonList = await this.pokemonApiService.getPokemonData();
  }

  async getPokemonImage(imgUrl: string) {
    this.pokemonImg = await this.pokemonApiService.getPokemonThumbnail(imgUrl);
  }
}
