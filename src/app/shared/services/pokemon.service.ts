import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = environment.apiUrl + "/pokemon"
  constructor(private http: HttpClient) { }

  getAllPokemons(query: any){
    return this.http.get(this.url, {
      params: {
        limit: query.limit,
        offset: query.offset
      }
    })
  }
  getPokemon(id: string){
    return this.http.get(this.url + "/" + id)
  }
}
