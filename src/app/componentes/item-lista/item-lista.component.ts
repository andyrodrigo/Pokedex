import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Tipos } from 'src/app/enumerations/tipo.enums';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css'],
})
export class ItemListaComponent implements OnInit, OnChanges {
  @Input() numero: string = '';
  @Input() nome: string = '';
  @Input() tipo1: string = '';
  @Input() tipo2: string = '';
  @Input() imagem: string = '';

  corTipo1: string = '#fff';
  corTipo2: string = '#fff';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: any): void {
    if (changes.tipo1) {
      this.corTipo1 = Tipos[this.tipo1 as keyof typeof Tipos] || Tipos.semTipo;
    }
    if (changes.tipo2) {
      this.corTipo2 = Tipos[this.tipo2 as keyof typeof Tipos] || Tipos.semTipo;
    }
  }

  verInfo() {
    this.router.navigate([`info/${this.numero}`]);
  }
}
