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
    this.pokemon.id = dados.id;
    this.pokemon.nome = dados.name;
    this.pokemon.imagem = `${this.SPRITE_URL}/${dados.id}.gif`;
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
      },
      error: (resposta) => {
        console.log('Erro: ', resposta);
      },
    });
  }

  private obterMaisDados(dados: any): void {
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

    const habitat = dados.habitat.name.replace(/-/g, '_');
    this.pokemon.habitat =
      Habitats[habitat as keyof typeof Habitats] || Habitats.padrao;
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
    if (proximo) {
      this.pokemon.id = this.pokemon.id + 1;
      if (this.pokemon.id > 151) this.pokemon.id = 1;
    } else {
      this.pokemon.id = this.pokemon.id - 1;
      if (this.pokemon.id < 1) this.pokemon.id = 151;
    }
    this.router.navigate([`info/${this.pokemon.id}`]);
    this.carregarPokemon(this.pokemon.id);
  }
}
