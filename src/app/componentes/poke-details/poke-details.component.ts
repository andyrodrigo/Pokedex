import { Component, Input, OnInit } from '@angular/core';
import { IRecipiente } from 'src/app/models/recipiente.model';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css'],
})
export class PokeDetailsComponent implements OnInit {
  @Input() peso: number = 0;
  @Input() altura: number = 0;
  @Input() experiencia: number = 0;
  @Input() felicidade: number = 0;
  @Input() taxa_captura: number = 0;
  @Input() taxa_genero: number = 0;
  @Input() habilidades: IRecipiente[] = [];
  @Input() itens: IRecipiente[] = [];

  constructor() {}

  ngOnInit(): void {}

  protected converterAltura(numero: number): string {
    if (numero < 10) {
      return numero * 10 + ' cm';
    } else {
      return numero / 10 + 'm';
    }
  }

  protected converterPeso(numero: number): string {
    return numero / 10 + 'kg';
  }

  protected calcularTaxa_Genero(numero: number, macho: boolean): string {
    if (numero === -1) {
      return 'unknown';
    } else {
      if (macho) {
        return 100 - numero * 12.5 + '%';
      } else {
        return numero * 12.5 + '%';
      }
    }
  }
}
