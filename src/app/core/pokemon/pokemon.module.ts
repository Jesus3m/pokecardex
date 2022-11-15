import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    NzPaginationModule
  ]
})
export class PokemonModule { }
