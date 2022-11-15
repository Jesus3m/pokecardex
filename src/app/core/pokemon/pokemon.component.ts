import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import {Pokemon} from './pokemon.types';
@Component({
  selector: 'rocket-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[]
  total: number = 0
  query = {
    limit: 12,
    offset: 0
  }
  page = 0
  constructor(private pokemonService: PokemonService) {
    this.pokemons = []
  }

  getPokemons(query: any){
    this.pokemonService.getAllPokemons(query).subscribe((res: any) => {
      this.pokemons = res.data.results
      this.total = res.data.count
    })
  }

  changePage(event: any){
    this.page = event
    this.query = {
      ...this.query,
      offset: this.query.limit * (event -1 )
    }
    this.getPokemons(this.query)
  }
  ngOnInit(): void {
    this.getPokemons(this.query)
  }

}
