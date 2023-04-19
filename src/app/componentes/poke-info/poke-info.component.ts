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

  modo: number = 1;
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
    ataqueF: '',
    defesaF: '',
    ataqueE: '',
    defesaE: '',
    velocidade: '',
    saude: '',
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
    this.pokemon.ataqueF = dados.stats[1].base_stat;
    this.pokemon.defesaF = dados.stats[2].base_stat;
    this.pokemon.ataqueE = dados.stats[3].base_stat;
    this.pokemon.defesaE = dados.stats[4].base_stat;
    this.pokemon.velocidade = dados.stats[5].base_stat;
    this.pokemon.saude = dados.stats[0].base_stat;

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
    let geracao = dados.generation.name;
    let forma;
    if (dados.shape !== null) {
      forma = dados.shape.name;
    } else {
      forma = 'semForma';
    }
    console.log(forma);
    let habitat = null;
    if (
      geracao === 'generation-i' ||
      geracao === 'generation-ii' ||
      geracao === 'generation-iii'
    ) {
      if (dados.habitat !== null)
        habitat = dados.habitat.name!.replace(/-/g, '_');
      if (habitat === 'waters_edge' && forma === 'fish') {
        habitat = 'river';
      } else if (habitat === 'sea') {
        if (
          (forma === 'fish' && this.pokemon.nome !== 'lapras') ||
          forma === 'tentacles' ||
          forma == 'ball' ||
          forma === 'blob' ||
          forma === 'squiggle' ||
          forma === 'armor'
        ) {
          habitat = 'deep_sea';
        } else if (forma === 'upright' || forma === 'quadruped') {
          habitat = 'beach';
        }
      } else if (
        (habitat === 'cave' && this.pokemon.tipo_1 == 'ice') ||
        (habitat === 'mountain' && this.pokemon.tipo_1 == 'ice') ||
        this.pokemon.nome === 'articuno'
      ) {
        habitat = 'iceland';
      } else if (this.pokemon.nome === 'lugia') {
        habitat = 'sea';
      } else if (
        this.pokemon.nome === 'zapdos' ||
        this.pokemon.nome === 'ho-oh' ||
        this.pokemon.nome === 'rayquaza'
      ) {
        habitat = 'sky';
      }
    } else {
      if (forma == 'fish') {
        habitat = 'deep_sea';
      } else {
        if (dados.is_legendary) {
          console.log('HEY ', this.pokemon.nome);
          if (
            this.pokemon.nome === 'tornadus-incarnate' ||
            this.pokemon.nome === 'landorus-incarnate' ||
            this.pokemon.nome === 'thundurus-incarnate' ||
            this.pokemon.nome === 'enamorus-incarnate'
          ) {
            habitat = 'sky';
          } else {
            habitat = 'rare';
          }
        } else {
          habitat = this.criarHabitat(this.pokemon.tipo_1);
        }
      }
    }
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
        case 'steel':
        case 'fire':
          resposta = 'rocks';
          break;
        case 'water':
          resposta = 'beach';
          break;
        case 'grass':
          resposta = 'grassland';
          break;
        case 'bug':
          resposta = 'forest';
          break;
        case 'fighting':
          resposta = 'urban';
          break;
        case 'rock':
          resposta = 'high_mountain';
          break;
        case 'ghost':
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

  mudar() {
    if (this.modo == 1) {
      this.modo = 2;
    } else {
      this.modo = 1;
    }
  }

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
