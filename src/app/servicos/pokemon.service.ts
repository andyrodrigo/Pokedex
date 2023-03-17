import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { config } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly API_URL: string = `${config['apiUrl']}`;

  pokemons!: any;

  constructor(private httpClient: HttpClient) {}

  consultarPokemons(limit: number, offset: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.API_URL}/pokemon/?limit=${limit}&offset=${offset}`
    );
  }

  consultarPokemon(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/pokemon/${id}`);
  }

  consultarEspecie(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/pokemon-species/${id}`);
  }
}
