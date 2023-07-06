import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { IMove } from 'src/app/models/move.model';
import { IRecipiente } from 'src/app/models/recipiente.model';

@Component({
  selector: 'app-poke-move',
  templateUrl: './poke-move.component.html',
  styleUrls: ['./poke-move.component.css'],
})
export class PokeMoveComponent implements OnInit, OnChanges {
  @Input() id: number = 0;
  @Input() moves: IRecipiente[] = [];

  metodoAtual: string = 'level-up';

  moves_g1: IMove[] = [];
  moves_g2: IMove[] = [];
  moves_g3: IMove[] = [];
  moves_g4: IMove[] = [];
  moves_g5: IMove[] = [];
  moves_g6: IMove[] = [];
  moves_g7: IMove[] = [];
  moves_g8: IMove[] = [];
  moves_g9: IMove[] = [];
  // moves_g10: IMove[] = [];
  // moves_g11: IMove[] = [];

  moves_level: IRecipiente[] = [];
  moves_tm: IRecipiente[] = [];
  moves_tutor: IRecipiente[] = [];

  tabAtiva: number = 1;
  gen = {
    gen1: false,
    gen2: false,
    gen3: false,
    gen4: false,
    gen5: false,
    gen6: false,
    gen7: false,
    gen8: false,
    gen9: false,
    gen10: false,
    gen11: false,
  };

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const tab1 = this.elementRef.nativeElement.querySelector('#tab1');
    const tab2 = this.elementRef.nativeElement.querySelector('#tab2');
    const tab3 = this.elementRef.nativeElement.querySelector('#tab3');
    const tab4 = this.elementRef.nativeElement.querySelector('#tab4');
    const tab5 = this.elementRef.nativeElement.querySelector('#tab5');
    const tab6 = this.elementRef.nativeElement.querySelector('#tab6');
    const tab7 = this.elementRef.nativeElement.querySelector('#tab7');
    const tab8 = this.elementRef.nativeElement.querySelector('#tab8');
    const tab9 = this.elementRef.nativeElement.querySelector('#tab9');
    // const tab10 = this.elementRef.nativeElement.querySelector('#tab10');
    // const tab11 = this.elementRef.nativeElement.querySelector('#tab11');
    //console.log('moves: ', this.moves);
    this.selecionarGeracao();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['moves']) {
      this.separarMoves();
    }
  }

  selecionarGeracao() {
    const id = this.id;

    if (id > 0 && id <= 151) {
      this.mostrarDiv(1);
    } else if (id > 151 && id <= 251) {
      this.mostrarDiv(2);
    } else if (id > 251 && id <= 386) {
      this.mostrarDiv(3);
    } else if (id > 386 && id <= 493) {
      this.mostrarDiv(4);
    } else if (id > 493 && id <= 649) {
      this.mostrarDiv(5);
    } else if (id > 649 && id <= 721) {
      this.mostrarDiv(6);
    } else if (id > 721 && id <= 809) {
      this.mostrarDiv(7);
      86;
    } else if (id > 809 && id <= 905) {
      this.mostrarDiv(8);
    } else if (id > 905) {
      this.mostrarDiv(9);
    }
  }

  private separarMoves(): void {
    const geracoes = [
      'red-blue',
      'gold-silver',
      'ruby-sapphire',
      'diamond-pearl',
      'black-white',
      'x-y',
      'sun-moon',
      'sword-shield',
      'scarlet-violet',
    ];

    for (let i = 0; i < geracoes.length; i++) {
      const geracao = geracoes[i];
      (this as any)[`moves_g${i + 1}`] = this.preencheMovePorGeracao(geracao);
    }
  }

  private preencheMovePorGeracao(versao: string): any[] {
    return this.moves
      .filter((move) => {
        return move.version_group_details.some((details: any) => {
          return details.version_group.name === versao;
        });
      })
      .map((move) => {
        const filteredDetails = move.version_group_details.filter(
          (details: any) => {
            return details.version_group.name === versao;
          }
        );

        return {
          nome: move!.move!.name,
          metodo: filteredDetails[0].move_learn_method.name,
          level: filteredDetails[0].level_learned_at,
        };
      })
      .sort((a, b) => a.level - b.level);
  }

  // protected mostrarDiv(numero: number) {
  //   console.log('n: ', numero);
  //   this.removerClasseAtiva();

  //   const genMap: { [key: number]: boolean } = {
  //     1: this.gen.gen1,
  //     2: this.gen.gen2,
  //     3: this.gen.gen3,
  //     4: this.gen.gen4,
  //     5: this.gen.gen5,
  //     6: this.gen.gen6,
  //     7: this.gen.gen7,
  //     8: this.gen.gen8,
  //     9: this.gen.gen9,
  //   };

  //   genMap[numero] = true;
  //   console.log(this.gen.gen4);
  //   this.adicionarClasseAtiva(numero);
  // }

  protected mostrarDiv(numero: number) {
    this.removerClasseAtiva();

    switch (numero) {
      case 1:
        this.gen.gen1 = true;
        break;
      case 2:
        this.gen.gen2 = true;
        break;
      case 3:
        this.gen.gen3 = true;
        break;
      case 4:
        this.gen.gen4 = true;
        break;
      case 5:
        this.gen.gen5 = true;
        break;
      case 6:
        this.gen.gen6 = true;
        break;
      case 7:
        this.gen.gen7 = true;
        break;
      case 8:
        this.gen.gen8 = true;
        break;
      case 9:
        this.gen.gen9 = true;
        break;
      default:
        break;
    }
    this.adicionarClasseAtiva(numero);
  }

  private removerClasseAtiva() {
    this.gen.gen1 = false;
    this.gen.gen2 = false;
    this.gen.gen3 = false;
    this.gen.gen4 = false;
    this.gen.gen5 = false;
    this.gen.gen6 = false;
    this.gen.gen7 = false;
    this.gen.gen8 = false;
    this.gen.gen9 = false;

    const tabs = this.elementRef.nativeElement.querySelectorAll('.nav-link');
    tabs.forEach((tab: any) => {
      tab.classList.remove('active');
    });
  }

  private adicionarClasseAtiva(numero: number) {
    const tab = this.elementRef.nativeElement.querySelector(`#tab${numero}`);
    if (tab) {
      tab.classList.add('active');
    }
  }
}

// capture rate
// 3 = 1,6%
// 6 = 2,6%
// 10 = 3,9%
// 15 = 5,2%
// 25 = 7,7%
// 30 = 8,8%
// 35 = 9,9%
// 45 = 11.9%
// 50 = 12,9%
// 55 = 13,9%
// 60 = 14,8%
// 65 = 15,7%
// 70 = 16,6%
// 75 = 17,5%
// 80 = 18,4%
// 90 = 20,1%
// 100 = 21,7%
// 115 =
// 120 = 24,9%
// 125 = 25,7%
// 127= 26%
// 130 = 26,5%
// 135 =
// 140 = 28%
// 145 = 28,7%
// 150= 29,5%
// 155 = 30,2%
// 160 = 30,9%
// 170= 32,4%
// 180 = 33,8%
// 190 = 35,2%
// 200 = 36,6%
// 205 = 37,2%
// 220 = 39,3%
// 225 = 39,9%
// 235 = 41,3%
// 255 = 43,9%
