export interface IPokemon {
  id?: string;
  name?: string;
  type1?: string;
  type2?: string;
  sprite?: string;
  url?: string;
}

export class Pokemon implements IPokemon {
  constructor(
    public id?: string,
    public name?: string,
    public type1?: string,
    public type2?: string,
    public sprite?: string,
    public url?: string
  ) {}
}
