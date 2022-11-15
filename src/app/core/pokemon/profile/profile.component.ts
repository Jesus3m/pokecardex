import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartTypeRegistry } from 'chart.js/auto';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Pokemon } from '../pokemon.types';

@Component({
  selector: 'rocket-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  pokemon: Pokemon = {} as Pokemon
  image: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  types: any = {}
  stats: any = []
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('name')!
    this.pokemonService.getPokemon(id).subscribe((res: any) => {
      this.pokemon = res.data
      this.image = this.image + res.data.id + '.png'
      this.types = this.pokemon.types
      this.stats = this.pokemon.stats
      this.renderChart()
    })
  }

  renderChart(){
    const ctx: any = document.getElementById('myChart')


    new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          data: this.pokemon.stats
        }]
      },
      options: {
        parsing: {
          xAxisKey: 'stat.name',
          yAxisKey: 'base_stat'
        }
      }
    });
  }

}
