import { Component, Input, OnInit } from '@angular/core';
import { IRecipiente } from 'src/app/models/recipiente.model';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css'],
})
export class PokeDetailsComponent implements OnInit {
  @Input() habilidades: IRecipiente[] = [];
  @Input() peso: number = 0;
  @Input() altura: number = 0;
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
}
