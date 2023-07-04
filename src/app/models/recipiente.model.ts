import { IObjetoSimples } from './objeto-simples.model';

export interface IRecipiente {
  slot?: number;
  is_hidden?: boolean;
  ability?: IObjetoSimples;
  item?: IObjetoSimples;
}

export class Recipiente implements IRecipiente {
  constructor(
    public slot?: number,
    public is_hidden?: boolean,
    public ability?: IObjetoSimples,
    public item?: IObjetoSimples
  ) {}
}
