export interface IMove {
  nome?: string;
  metodo?: string;
  level?: string;
}

export class Move implements IMove {
  constructor(
    public nome?: string,
    public metodo?: string,
    public level?: string
  ) {}
}
