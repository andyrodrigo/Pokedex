import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css'],
})
export class ItemListaComponent implements OnInit {
  @Input() numero: string = '';
  @Input() nome: string = '';
  @Input() tipo1: string = '';
  @Input() tipo2: string = '';
  @Input() imagem: string = '';

  constructor() {}

  ngOnInit(): void {}
}
