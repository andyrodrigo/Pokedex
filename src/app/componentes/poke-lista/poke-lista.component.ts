import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicos/pokemon.service';
import { IPokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-poke-lista',
  templateUrl: './poke-lista.component.html',
  styleUrls: ['./poke-lista.component.css'],
})
export class PokeListaComponent implements OnInit {
  dados: any;
  pokemons: IPokemon[] = [];
  offset: number = 0; //a partir de
  limit: number = 151;

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.buscarLista();
  }

  private buscarLista(): void {
    this.pokeService.consultarPokemons(this.limit, this.offset).subscribe({
      next: (resposta) => {
        this.dados = resposta;
        this.pokemons = this.dados.results;
        this.montarPokemon();
        this.offset = this.offset + this.limit;
      },
      error: (resposta) => {
        console.log('Falha de conexão com PokeApi: ', resposta);
      },
    });
  }

  montarPokemon() {
    for (let i = this.offset; i < this.limit; i++) {
      this.pokeService.consultarPokemon(i + 1).subscribe({
        next: (resposta) => {
          const dados = resposta;
          this.pokemons[i].id = dados.id;
          this.pokemons[i].type1 = dados.types[0].type.name;
          if (dados.types.length == 2) {
            this.pokemons[i].type2 = dados.types[1].type.name;
          }
          this.pokemons[i].sprite =
            dados.sprites.other.dream_world.front_default;
        },
        error: (resposta) => {
          console.log('Falha de conexão com PokeApi: ', resposta);
        },
      });
    }
  }
}

// this.pokeService
//   .consultarPokemon((i + 1).toString())
//   .subscribe((resposta) => {
//     let dados = resposta;
//     console.log(dados);
//     this.pokemons[i].id = dados.id;
//     this.pokemons[i].type1 = dados.types[0].type.name;
//     if (dados.types.length == 2) {
//       this.pokemons[i].type2 = dados.types[1].type.name;
//     }
//     this.pokemons[i].sprite =
//       dados.sprites.other.dream_world.front_default;
//     //this.pokemons[i].sprite = dados.sprites.other.home.front_default;
//     /*this.pokemons[
//     i
//   ].sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
//     i + 1
//   }.png`;*/
//   });
