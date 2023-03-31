import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { config } from 'src/app/config/config';
import { Habitats } from 'src/app/enumerations/habitat.enum';
import { Tipos } from 'src/app/enumerations/tipo.enums';
import { PokemonService } from 'src/app/servicos/pokemon.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css'],
})
export class PokeInfoComponent implements OnInit {
  private readonly SPRITE_URL: string = `${config['spriteUrl']}`;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  max = 1008;
  carregadaTodasInfomacoes: Boolean = false;

  pokemon = {
    id: 0,
    nome: 'Missing Nº',
    habitat: Habitats.padrao,
    imagem: '/assets/images/missingNumber.png',
    altura: null,
    peso: null,
    tipo_1: null,
    tipo_2: null,
    habilidades: [],
    estatisticas: [],
    info: [],
  };

  corTipo1: string = Tipos.semTipo;
  corTipo2: string = Tipos.semTipo;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.carregarPokemon(Number(id));
  }

  private carregarPokemon(id: number) {
    this.pokeService.consultarPokemon(id).subscribe({
      next: (resposta) => {
        this.obterDados(resposta);
      },
      error: (resposta) => {
        console.log('Erro: ', resposta);
      },
    });
  }

  private obterDados(dados: any): void {
    console.log('dados: ', dados);
    this.pokemon.id = dados.id;
    this.pokemon.nome = dados.name;
    if (dados.id < 650) {
      this.pokemon.imagem = `${this.SPRITE_URL}/${dados.id}.gif`;
    } else {
      this.pokemon.imagem = dados.sprites.front_default;
    }

    this.pokemon.altura = dados.height;
    this.pokemon.peso = dados.weight;
    this.pokemon.habilidades = dados.abilities;
    this.pokemon.tipo_1 = dados.types[0].type.name;
    this.corTipo1 =
      Tipos[dados.types[0].type.name as keyof typeof Tipos] || Tipos.semTipo;
    this.pokemon.tipo_2 = dados.types[1]?.type.name;
    this.corTipo2 =
      Tipos[dados.types[1]?.type.name as keyof typeof Tipos] || Tipos.semTipo;
    this.pokemon.estatisticas = dados.stats;

    this.pokeService.consultarEspecie(dados.id).subscribe({
      next: (resposta) => {
        this.obterMaisDados(resposta);
        this.carregadaTodasInfomacoes = true;
      },
      error: (resposta) => {
        console.log('Erro: ', resposta);
      },
    });
  }

  private obterMaisDados(dados: any): void {
    //console.log('dados: ', dados);
    const textosUnicos = dados.flavor_text_entries.reduce(
      (acc: any, entry: any) => {
        if (entry.language.name === 'en') {
          const texto = entry.flavor_text.replace(/\f/g, ' ');
          if (!acc[texto]) {
            acc[texto] = {
              versao: entry.version.name,
              texto: texto,
            };
          }
        }
        return acc;
      },
      {}
    );

    this.pokemon.info = Object.values(textosUnicos);

    let habitat = null;
    if (
      dados.generation.name === 'generation-iv' ||
      'generation-v' ||
      'generation-vi'
    ) {
      if (dados.is_legendary) {
        habitat = 'rare';
      } else {
        habitat = this.criarHabitat(this.pokemon.tipo_1);
      }
    } else {
      if (dados.habitat !== null)
        habitat = dados.habitat.name!.replace(/-/g, '_');
    }

    // if (
    //   habitat === Habitats.sea &&
    //   (this.pokemon.tipo_1 == 'Flying' || this.pokemon.tipo_2! == 'Flying')
    // ){

    // }
    this.pokemon.habitat =
      Habitats[habitat as keyof typeof Habitats] || Habitats.padrao;

    console.log(this.pokemon.habitat);
  }

  private criarHabitat(tipo: string | null): string {
    let resposta = 'padrao';
    if (tipo) {
      switch (tipo) {
        case 'ground':
          resposta = 'rough_terrain';
          break;
        case 'water':
          resposta = 'sea';
          break;
        case 'grass':
          resposta = 'grassland';
          break;
        case 'bug':
          resposta = 'forest';
          break;
        case 'water':
          resposta = 'sea';
          break;
        case 'fighting':
          resposta = 'urban';
          break;
        case 'rock':
          resposta = 'high_mountain';
          break;
        case 'ghost':
          resposta = 'dark_cave';
          break;
        case 'dark':
          resposta = 'dark_forest';
          break;
        case 'ice':
          resposta = 'iceland';
          break;
        default:
          resposta = 'padrao';
      }
    }
    return resposta;
  }

  // private obterMaisDados(dados: any): void {
  //   this.pokemon.info = dados.flavor_text_entries
  //     .filter((entry: any) => entry.language.name === 'en')
  //     .map((entry: any) => {
  //       return {
  //         versao: entry.version.name,
  //         texto: entry.flavor_text.replace(/\f/g, ' '),
  //       };
  //     });
  //   const habitat = dados.habitat.name.replace(/-/g, '_');
  //   this.pokemon.habitat =
  //     Habitats[habitat as keyof typeof Habitats] || Habitats.padrao;
  // }

  protected voltar(): void {
    this.router.navigate(['']);
  }

  protected proximo(proximo: boolean): void {
    this.carregadaTodasInfomacoes = false;
    if (proximo) {
      this.pokemon.id = this.pokemon.id + 1;
      if (this.pokemon.id > this.max) this.pokemon.id = 1;
    } else {
      this.pokemon.id = this.pokemon.id - 1;
      if (this.pokemon.id < 1) this.pokemon.id = this.max;
    }
    this.router.navigate([`info/${this.pokemon.id}`]);
    this.carregarPokemon(this.pokemon.id);
  }
}
