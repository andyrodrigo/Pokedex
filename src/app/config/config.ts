interface Config {
  [key: string]: string;
}

export const config: Config = {
  apiUrl: 'https://pokeapi.co/api/v2',
  spriteUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated',
};
