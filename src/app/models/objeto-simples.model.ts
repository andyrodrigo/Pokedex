export interface IObjetoSimples {
  name?: string;
  url?: string;
}

export class ObjetoSimples implements IObjetoSimples {
  constructor(public name?: string, public url?: string) {}
}
