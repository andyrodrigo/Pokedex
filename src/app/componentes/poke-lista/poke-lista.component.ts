import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { forkJoin } from 'rxjs';

import { PokemonService } from 'src/app/servicos/pokemon.service';
import { IPokemonItem, PokemonItem } from 'src/app/models/pokemonItem.model';

@Component({
  selector: 'app-poke-lista',
  templateUrl: './poke-lista.component.html',
  styleUrls: ['./poke-lista.component.css'],
})
export class PokeListaComponent implements OnInit, OnDestroy {
  inscricaoLista!: Subscription;
  inscricaoPoke!: Subscription;
  pokemons: IPokemonItem[] = [];
  offset: number = 0; //a partir de
  limit: number = 10;
  maxLimit: number = 649;
  refIndice = 0;
  getAll: Boolean = false;
  chamado: Boolean = false;
  carregando: boolean = false;

  opcoes: string[] = [
    "Get'em all",
    'Generation 1',
    'Generation 2',
    'Generation 3',
    'Generation 4',
    'Generation 5',
  ];

  constructor(
    private pokeService: PokemonService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.gerarPokemons();
    const mainElement = this.elementRef.nativeElement.querySelector('#lista');
    mainElement.addEventListener('scroll', this.aoRolar.bind(this));
  }

  ngOnDestroy(): void {
    if (this.inscricaoLista) this.inscricaoLista.unsubscribe();
    if (this.inscricaoPoke) this.inscricaoPoke.unsubscribe();
  }

  private gerarPokemons() {
    this.carregando = true;

    const requests = [];
    const tamanho = Math.min(this.limit, this.maxLimit - this.pokemons.length);
    const quantidade = this.pokemons.length;

    for (let i = 0; i < tamanho; i++) {
      const indice = this.pokemons.length;
      const consulta = this.offset + indice + 1;
      this.pokemons[indice] = new PokemonItem();
      const request = this.pokeService.consultarPokemon(consulta);
      requests.push(request);
    }

    this.inscricaoPoke = forkJoin(requests).subscribe({
      next: (respostas) => {
        respostas.forEach((resposta, index) => {
          const dados = resposta;
          const indice = quantidade + index;
          this.incluirPokemon(dados, indice);
        });
      },
      error: (resposta) => {
        console.log('Falha de conexão com PokeApi: ', resposta);
      },
      complete: () => {
        this.carregando = false;
      },
    });
  }

  incluirPokemon(dados: any, indice: number) {
    this.pokemons[indice] = new PokemonItem(
      dados.id,
      dados.name,
      dados.sprites.other.dream_world.front_default,
      dados.types[0].type.name,
      dados.types.length === 2 ? dados.types[1].type.name : ''
    );
  }

  protected aoRolar(event: any) {
    const element = event.target;
    const scrollLimite = 1;

    const fim_rolagem =
      element.scrollHeight - element.scrollTop <=
      element.clientHeight + scrollLimite;

    if (
      fim_rolagem &&
      !this.carregando &&
      this.pokemons.length < this.maxLimit
    ) {
      this.gerarPokemons();
    }
  }

  protected mudarLista(valorSelecionado: any) {
    const configuracoes = {
      [this.opcoes[1]]: { offset: 0, maxLimit: 150 },
      [this.opcoes[2]]: { offset: 151, maxLimit: 100 },
      [this.opcoes[3]]: { offset: 251, maxLimit: 135 },
      [this.opcoes[4]]: { offset: 386, maxLimit: 107 },
      [this.opcoes[5]]: { offset: 493, maxLimit: 156 },
    };

    const configuracao = configuracoes[valorSelecionado] || {
      offset: 0,
      maxLimit: 649,
    };
    this.pokemons = [];
    this.offset = configuracao.offset;
    this.maxLimit = configuracao.maxLimit;
    this.gerarPokemons();
  }

  // private buscarLista(): void {
  //   this.inscricaoLista = this.pokeService
  //     .consultarPokemons(this.limit, this.offset)
  //     .subscribe({
  //       error: (resposta) => {
  //         console.log('Falha de conexão com PokeApi: ', resposta);
  //       },
  //       next: (resposta) => {
  //         const dados = resposta;
  //         this.pokemons = dados.results;
  //         this.getAll = true;
  //       },
  //     });
  // }
}
