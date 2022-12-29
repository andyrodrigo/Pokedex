import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pokedex';

  somar(n1: string, n2: string) {
    const resposta = Number(n1) + Number(n2);
    alert(resposta);
  }
}
