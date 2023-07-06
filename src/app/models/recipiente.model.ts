import { IObjetoSimples } from './objeto-simples.model';

export interface IRecipiente {
  slot?: number;
  is_hidden?: boolean;
  ability?: IObjetoSimples;
  item?: IObjetoSimples;
  move?: IObjetoSimples;
  version_group_details?: any;
}

export class Recipiente implements IRecipiente {
  constructor(
    public slot?: number,
    public is_hidden?: boolean,
    public ability?: IObjetoSimples,
    public item?: IObjetoSimples,
    public move?: IObjetoSimples,
    public ersion_group_details?: any
  ) {}
}
