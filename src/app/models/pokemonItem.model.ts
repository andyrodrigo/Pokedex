export interface IPokemonItem {
  id?: string;
  name?: string;
  sprite?: string;
  type1?: string;
  type2?: string;
}

export class PokemonItem implements IPokemonItem {
  constructor(
    public id?: string,
    public name?: string,
    public sprite?: string,
    public type1?: string,
    public type2?: string
  ) {}

  static createEmpty(): PokemonItem {
    return new PokemonItem('', '', '', '', '');
  }
}
