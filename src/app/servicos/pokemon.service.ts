import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrl: string = 'https://pokeapi.co/api/v2';

  pokemons!: any;

  constructor(private httpClient: HttpClient) {}

  consultarPokemons(limit: number, offset: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.apiUrl}/pokemon/?limit=${limit}&offset=${offset}`
    );
  }

  consultarPokemon(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/pokemon/${id}`);
  }
}
