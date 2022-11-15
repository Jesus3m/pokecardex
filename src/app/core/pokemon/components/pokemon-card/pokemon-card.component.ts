import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rocket-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: any
  id: string = ""
  image: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.pokemon.url.split("/")
    this.id = this.id[this.id.length - 2]
    this.image = this.image + this.id + ".png"
  }

  navigateRoProfile(){
    this.router.navigate(["pokemon", this.pokemon.name])
  }

}
