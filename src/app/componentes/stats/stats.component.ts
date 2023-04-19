import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit, OnChanges {
  @Input() ataqueF: string = '0';
  @Input() defesaF: string = '0';
  @Input() ataqueE: string = '0';
  @Input() defesaE: string = '0';
  @Input() velocidade: string = '0';
  @Input() saude: string = '0';

  ataqueF1: string = '0';
  defesaF1: string = '0';
  ataqueE1: string = '0';
  defesaE1: string = '0';
  saude1: string = '0';
  velocidade1: string = '0';

  ataqueF2: string = '0';
  defesaF2: string = '0';
  ataqueE2: string = '0';
  defesaE2: string = '0';
  saude2: string = '0';
  velocidade2: string = '0';

  defesaF3: string = '0';
  defesaE3: string = '0';
  saude3: string = '0';

  maisAtaqueF: Boolean = false;
  maisDefesaF: Boolean = false;
  maisAtaqueE: Boolean = false;
  maisDefesaE: Boolean = false;
  maisVelocidade: Boolean = false;
  maisSaude: Boolean = false;

  superDefesaF: Boolean = false;
  superDefesaE: Boolean = false;
  superSaude: Boolean = false;

  cores = {
    ataqueF: '#8b0000',
    defesaF: '#0080ff',
    ataqueE: '#ff00ff',
    defesaE: '#8a2be2',
    velocidade: '#ff8c00',
    saude: '#ff0000',
  };
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.organizar();
    this.ajustar();
  }

  ngOnInit(): void {}

  private organizar() {
    this.maisAtaqueF = false;
    this.maisDefesaF = false;
    this.maisAtaqueE = false;
    this.maisDefesaE = false;
    this.maisVelocidade = false;
    this.maisSaude = false;
    this.superDefesaF = false;
    this.superDefesaE = false;
    this.superSaude = false;

    this.ataqueF1 = this.ataqueF;
    this.defesaF1 = this.defesaF;
    this.ataqueE1 = this.ataqueE;
    this.defesaE1 = this.defesaE;
    this.velocidade1 = this.velocidade;
    this.saude1 = this.saude;
  }

  private ajustar() {
    if (Number(this.ataqueF) > 100) {
      let dif = Number(this.ataqueF) - 100;
      this.ataqueF2 = String(dif);
      this.ataqueF1 = '100';
      this.maisAtaqueF = true;
    }
    if (Number(this.defesaF) > 100) {
      let dif = Number(this.defesaF) - 100;
      this.defesaF2 = String(dif);
      this.defesaF1 = '100';
      this.maisDefesaF = true;
      if (Number(this.defesaF2) > 100) {
        dif = Number(this.defesaF2) - 100;
        this.defesaF3 = String(dif);
        this.defesaF2 = '100';
        this.superDefesaF = true;
      }
    }
    if (Number(this.ataqueE) > 100) {
      let dif = Number(this.ataqueE) - 100;
      this.ataqueE2 = String(dif);
      this.ataqueE1 = '100';
      this.maisAtaqueE = true;
    }
    if (Number(this.defesaE) > 100) {
      let dif = Number(this.defesaE) - 100;
      this.defesaE2 = String(dif);
      this.defesaE1 = '100';
      this.maisDefesaE = true;
      if (Number(this.defesaE2) > 100) {
        dif = Number(this.defesaE2) - 100;
        this.defesaE3 = String(dif);
        this.defesaE2 = '100';
        this.superDefesaE = true;
      }
    }
    if (Number(this.velocidade) > 100) {
      let dif = Number(this.velocidade) - 100;
      this.velocidade2 = String(dif);
      this.velocidade1 = '100';
      this.maisVelocidade = true;
    }
    if (Number(this.saude) > 100) {
      let dif = Number(this.saude) - 100;
      this.saude2 = String(dif);
      this.saude1 = '100';
      this.maisSaude = true;
      if (Number(this.saude2) > 100) {
        dif = Number(this.saude2) - 100;
        this.saude3 = String(dif);
        this.saude2 = '100';
        this.superSaude = true;
      }
    }
  }
}
