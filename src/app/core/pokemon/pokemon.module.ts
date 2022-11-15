import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonCardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    NzPaginationModule,

  ],
  providers: [
  ],
})
export class PokemonModule { }
