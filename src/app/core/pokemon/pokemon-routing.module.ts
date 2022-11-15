import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
   path: '',
   component: PokemonComponent,
   }, {
    path: ':name',
    component: ProfileComponent
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
