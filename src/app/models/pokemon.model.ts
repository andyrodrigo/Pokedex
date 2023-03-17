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

// cave
// forest
// grassland
// mountain
// rare
// rough - terrain
// sea
// urban
// waters - edge

const pokemonExemplo = {
  id: 1,
  name: 'bulbasaur',
  order: 1,
  base_experience: 64,
  height: 7,
  weight: 69,
  is_default: true,
  held_items: [],
  past_types: [],
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  abilities: [
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  forms: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  game_indices: [
    {
      game_index: 153,
      version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' },
    },
    {
      game_index: 153,
      version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' },
    },
  ],
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    {
      move: { name: 'razor-wind', url: 'https://pokeapi.co/api/v2/move/13/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
    {
      move: { name: 'swords-dance', url: 'https://pokeapi.co/api/v2/move/14/' },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: { name: 'vine-whip', url: 'https://pokeapi.co/api/v2/move/22/' },
      version_group_details: [
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
  ],
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        front_female: null,
      },
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
        front_shiny_female: null,
      },
      official_artwork$: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
      },
      versions: {
        generation_i$: {
          red_blue$: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png',
            back_gray:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png',
            back_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png',
            front_gray:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png',
            front_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png',
          },
          yellow: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png',
            back_gray:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png',
            back_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png',
            front_gray:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png',
            front_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png',
          },
        },
        generation_ii$: {
          crystal: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png',
            back_shiny_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/1.png',
            back_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png',
            front_shiny_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/1.png',
            front_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png',
          },
          gold: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png',
            front_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/1.png',
          },
          silver: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png',
            front_transparent:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/1.png',
          },
        },
        generation_iii$: {
          emerald: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png',
          },
          'firered-leafgreen': {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png',
          },
          ruby_sapphire$: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png',
          },
        },
        generation_iv$: {
          diamond_pearl$: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png',
            back_female: null,
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png',
            back_shiny_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png',
            front_shiny_female: null,
          },
          'heartgold-soulsilver': {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png',
            back_female: null,
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png',
            back_shiny_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png',
            front_shiny_female: null,
          },
          platinum: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png',
            back_female: null,
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png',
            back_shiny_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png',
            front_shiny_female: null,
          },
        },
        generation_v$: {
          'black-white': {
            animated: {
              back_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif',
              back_female: null,
              back_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif',
              back_shiny_female: null,
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
              front_female: null,
              front_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif',
              front_shiny_female: null,
            },
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png',
            back_female: null,
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png',
            back_shiny_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png',
            front_shiny_female: null,
          },
        },
        generation_vi$: {
          'omegaruby-alphasapphire': {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png',
            front_shiny_female: null,
          },
          'x-y': {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png',
            front_shiny_female: null,
          },
        },
        generation_vii$: {
          icons: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png',
            front_shiny_female: null,
          },
        },
        generation_viii$: {
          icons: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png',
            front_female: null,
          },
        },
      },
    },
  },
};

const objeto = {
  base_happiness: 50,
  capture_rate: 45,
  color: { name: 'green', url: 'https://pokeapi.co/api/v2/pokemon-color/5/' },
  egg_groups: [
    { name: 'monster', url: 'https://pokeapi.co/api/v2/egg-group/1/' },
    { name: 'plant', url: 'https://pokeapi.co/api/v2/egg-group/7/' },
  ],
  evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/1/' },
  evolves_from_species: null,
  flavor_text_entries: [
    {
      flavor_text:
        'A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' },
    },
    {
      flavor_text:
        'A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' },
    },
    {
      flavor_text:
        'It can go for days\nwithout eating a\nsingle morsel.\fIn the bulb on\nits back, it\nstores energy.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version/3/' },
    },
    {
      flavor_text:
        'The seed on its\nback is filled\nwith nutrients.\fThe seed grows\nsteadily larger as\nits body grows.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'gold', url: 'https://pokeapi.co/api/v2/version/4/' },
    },
    {
      flavor_text:
        'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'silver', url: 'https://pokeapi.co/api/v2/version/5/' },
    },
    {
      flavor_text:
        'While it is young,\nit uses the\nnutrients that are\fstored in the\nseeds on its back\nin order to grow.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'crystal', url: 'https://pokeapi.co/api/v2/version/6/' },
    },
    {
      flavor_text:
        'BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' },
    },
    {
      flavor_text:
        'BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      flavor_text:
        'BULBASAUR can be seen napping in bright\nsunlight. There is a seed on its back.\nBy soaking up the sun’s rays, the seed\ngrows progressively larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'emerald', url: 'https://pokeapi.co/api/v2/version/9/' },
    },
    {
      flavor_text:
        'There is a plant seed on its back right\nfrom the day this POKéMON is born.\nThe seed slowly grows larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      flavor_text:
        'A strange seed was planted on its back at\nbirth. The plant sprouts and grows with\nthis POKéMON.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      flavor_text:
        'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      flavor_text:
        'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'pearl', url: 'https://pokeapi.co/api/v2/version/13/' },
    },
    {
      flavor_text:
        'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      flavor_text:
        'The seed on its back is filled\nwith nutrients. The seed grows\nsteadily larger as its body grows.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      flavor_text:
        'It carries a seed on its back right\nfrom birth. As it grows older, the\nseed also grows larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      flavor_text:
        'Au matin de sa vie, la graine sur\nson dos lui fournit les éléments\ndont il a besoin pour grandir.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' },
    },
    {
      flavor_text:
        'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'black', url: 'https://pokeapi.co/api/v2/version/17/' },
    },
    {
      flavor_text:
        'Au matin de sa vie, la graine sur\nson dos lui fournit les éléments\ndont il a besoin pour grandir.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' },
    },
    {
      flavor_text:
        'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'white', url: 'https://pokeapi.co/api/v2/version/18/' },
    },
    {
      flavor_text:
        'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      flavor_text:
        'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
    {
      flavor_text:
        'うまれたときから　せなかに\nふしぎな　タネが　うえてあって\nからだと　ともに　そだつという。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        '태어났을 때부터 등에\n이상한 씨앗이 심어져 있으며\n몸과 함께 자란다고 한다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Il a une étrange graine plantée sur son dos.\nElle grandit avec lui depuis sa naissance.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Dieses Pokémon trägt von Geburt an einen Samen\nauf dem Rücken, der mit ihm keimt und wächst.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Una rara semilla le fue plantada en el lomo al nacer.\nLa planta brota y crece con este Pokémon.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'Alla nascita gli è stato piantato sulla schiena un seme\nraro. La pianta sboccia e cresce con lui.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'A strange seed was planted on its back at birth.\nThe plant sprouts and grows with this Pokémon.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        '生まれたときから　背中に\n不思議な　タネが　植えてあって\n体と　ともに　育つという。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'x', url: 'https://pokeapi.co/api/v2/version/23/' },
    },
    {
      flavor_text:
        'うまれてから　しばらくの　あいだは\nせなかの　タネから　えいようを\nもらって　おおきく　そだつ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        '태어나서부터 얼마 동안은\n등의 씨앗으로부터 영양을\n공급받아 크게 성장한다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Au matin de sa vie, la graine sur son dos lui fournit\nles éléments dont il a besoin pour grandir.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Nach der Geburt nimmt es für eine Weile Nährstoffe\nüber den Samen auf seinem Rücken auf.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Después de nacer, crece alimentándose de las\nsemillas de su lomo.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'Dopo la nascita, cresce traendo nutrimento dal seme\npiantato sul suo dorso.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'For some time after its birth, it grows by gaining\nnourishment from the seed on its back.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        '生まれてから　しばらくの　あいだは\n背中の　タネから　栄養を　もらって\n大きく　育つ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'y', url: 'https://pokeapi.co/api/v2/version/24/' },
    },
    {
      flavor_text:
        'ひなたで　ひるねを　する　すがたを　みかける。\nたいようの　ひかりを　いっぱい　あびることで\nせなかの　タネが　おおきく　そだつのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        '양지에서 낮잠 자는 모습을 볼 수 있다.\n태양의 빛을 많이 받으면\n등의 씨앗이 크게 자란다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Bulbizarre passe son temps à faire la sieste sous le soleil.\nIl y a une graine sur son dos. Il absorbe les rayons du soleil\npour faire doucement pousser la graine.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Bisasam macht gern einmal ein Nickerchen im\nSonnenschein. Auf seinem Rücken trägt es einen\nSamen. Indem es Sonnenstrahlen aufsaugt,\nwird der Samen zunehmend größer.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'A Bulbasaur es fácil verle echándose una siesta al sol.\nLa semilla que tiene en el lomo va creciendo cada vez más\na medida que absorbe los rayos del sol.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'È possibile vedere Bulbasaur mentre schiaccia un pisolino\nsotto il sole. Ha un seme piantato sulla schiena. Grazie ai\nraggi solari il seme cresce ingrandendosi progressivamente.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        '日なたで　昼寝を　する　姿を　見かける。\n太陽の　光を　いっぱい　浴びることで\n背中の　タネが　大きく　育つのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'omega-ruby',
        url: 'https://pokeapi.co/api/v2/version/25/',
      },
    },
    {
      flavor_text:
        'ひなたで　ひるねを　する　すがたを　みかける。\nたいようの　ひかりを　いっぱい　あびることで\nせなかの　タネが　おおきく　そだつのだ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        '양지에서 낮잠 자는 모습을 볼 수 있다.\n태양의 빛을 많이 받으면\n등의 씨앗이 크게 자란다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Bulbizarre passe son temps à faire la sieste sous le soleil.\nIl y a une graine sur son dos. Il absorbe les rayons du soleil\npour faire doucement pousser la graine.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Bisasam macht gern einmal ein Nickerchen im\nSonnenschein. Auf seinem Rücken trägt es einen\nSamen. Indem es Sonnenstrahlen aufsaugt,\nwird er zunehmend größer.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'A Bulbasaur es fácil verle echándose una siesta al sol.\nLa semilla que tiene en el lomo va creciendo cada vez más\na medida que absorbe los rayos del sol.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'È possibile vedere Bulbasaur mentre schiaccia un pisolino\nsotto il sole. Ha un seme piantato sulla schiena. Grazie ai\nraggi solari il seme cresce ingrandendosi progressivamente.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        '日なたで　昼寝を　する　姿を　見かける。\n太陽の　光を　いっぱい　浴びることで\n背中の　タネが　大きく　育つのだ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'alpha-sapphire',
        url: 'https://pokeapi.co/api/v2/version/26/',
      },
    },
    {
      flavor_text:
        'なんにちだって　なにも　たべなくても\nげんき！　せなかのタネに　たくさん\nえいようが　あるから　へいきだ！',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '며칠 동안 아무것도 먹지 않아도\n건강하다! 등에 있는 씨앗에는\n많은 영양분이 있어서 문제없다!',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '背上的種子裡存著很多營養，\n所以就算好幾天不吃東西\n也能活得好好的！',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Il peut survivre plusieurs jours sans manger\ngrâce aux nutriments contenus dans le bulbe\nsur son dos.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Es kommt tagelang ohne Nahrung aus, da es\nin den Samen auf seinem Rücken Nährstoffe\nspeichert.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Puede sobrevivir largo tiempo sin probar\nbocado gracias a los nutrientes que guarda\nen el bulbo del lomo.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'Questo Pokémon può stare a lungo senza\nmangiare. Accumula energia nel bulbo che\nha sulla schiena.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '何日だって　なにも　食べなくても\n元気！　背中のタネに　たくさん\n栄養が　あるから　平気だ！',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        '背上的种子里储存着营养，\n所以即使好几天不吃东西\n也可以活得好好的！',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: {
        name: 'lets-go-pikachu',
        url: 'https://pokeapi.co/api/v2/version/31/',
      },
    },
    {
      flavor_text:
        'なんにちだって　なにも　たべなくても\nげんき！　せなかのタネに　たくさん\nえいようが　あるから　へいきだ！',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '며칠 동안 아무것도 먹지 않아도\n건강하다! 등에 있는 씨앗에는\n많은 영양분이 있어서 문제없다!',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '背上的種子裡存著很多營養，\n所以就算好幾天不吃東西\n也能活得好好的！',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Il peut survivre plusieurs jours sans manger\ngrâce aux nutriments contenus dans le bulbe\nsur son dos.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Es kommt tagelang ohne Nahrung aus, da es\nin den Samen auf seinem Rücken Nährstoffe\nspeichert.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Puede sobrevivir largo tiempo sin probar\nbocado gracias a los nutrientes que guarda\nen el bulbo del lomo.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'Questo Pokémon può stare a lungo senza\nmangiare. Accumula energia nel bulbo che\nha sulla schiena.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '何日だって　なにも　食べなくても\n元気！　背中のタネに　たくさん\n栄養が　あるから　平気だ！',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        '背上的种子里储存着营养，\n所以即使好几天不吃东西\n也可以活得好好的！',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: {
        name: 'lets-go-eevee',
        url: 'https://pokeapi.co/api/v2/version/32/',
      },
    },
    {
      flavor_text:
        'うまれたときから　せなかに\nしょくぶつの　タネが　あって\nすこしずつ　おおきく　そだつ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '태어났을 때부터 등에\n식물의 씨앗이 있으며\n조금씩 크게 자란다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '從出生的時候開始\n背上就有一顆植物種子。\n這顆種子會漸漸地長大。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Il y a une graine sur son dos depuis sa naissance.\nElle grossit un peu chaque jour.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Dieses Pokémon trägt von Geburt an einen\nSamen auf dem Rücken, der im Laufe der Zeit\nkeimt und wächst.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Este Pokémon nace con una semilla en el lomo,\nque brota con el paso del tiempo.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'Fin dalla nascita questo Pokémon ha sulla schiena\nun seme che cresce lentamente.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '生まれたときから　背中に\n植物の　タネが　あって\n少しずつ　大きく　育つ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        '从出生的时候开始，\n背上就有一颗植物种子。\n这颗种子会渐渐地长大。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'sword', url: 'https://pokeapi.co/api/v2/version/33/' },
    },
    {
      flavor_text:
        'うまれて　しばらくの　あいだ\nせなかの　タネに　つまった\nえいようを　とって　そだつ。',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '태어나서 얼마 동안\n등의 씨앗에 담긴\n영양을 섭취하며 자란다.',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '在出生後的一段時間內，\n牠會吸收背上種子裡\n儲存著的營養成長。',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Quand il est jeune, il absorbe les nutriments\nconservés dans son dos pour grandir\net se développer.',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Nach der Geburt nimmt es für eine Weile\nNährstoffe über den Samen auf seinem\nRücken auf.',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Desde que nace, crece alimentándose de los\nnutrientes que contiene la semilla de su lomo.',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'Appena nato, trae nutrimento dalle sostanze\ncontenute nel seme sul dorso.',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        'While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow.',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '生まれて　しばらくの　あいだ\n背中の　タネに　つまった\n栄養を　とって　育つ。',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
    {
      flavor_text:
        '在出生后的一段时间内，\n它会吸收背上种子里\n储存着的营养成长。',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      version: { name: 'shield', url: 'https://pokeapi.co/api/v2/version/34/' },
    },
  ],
  form_descriptions: [],
  forms_switchable: false,
  gender_rate: 1,
  genera: [
    {
      genus: 'たねポケモン',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
    },
    {
      genus: '씨앗포켓몬',
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
    },
    {
      genus: '種子寶可夢',
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
    },
    {
      genus: 'Pokémon Graine',
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
    },
    {
      genus: 'Samen-Pokémon',
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
    },
    {
      genus: 'Pokémon Semilla',
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
    },
    {
      genus: 'Pokémon Seme',
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
    },
    {
      genus: 'Seed Pokémon',
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
    },
    {
      genus: 'たねポケモン',
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
    },
    {
      genus: '种子宝可梦',
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
    },
  ],
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/',
  },
  growth_rate: {
    name: 'medium-slow',
    url: 'https://pokeapi.co/api/v2/growth-rate/4/',
  },
  habitat: {
    name: 'grassland',
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
  },
  has_gender_differences: false,
  hatch_counter: 20,
  id: 1,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,
  name: 'bulbasaur',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'フシギダネ',
    },
    {
      language: {
        name: 'roomaji',
        url: 'https://pokeapi.co/api/v2/language/2/',
      },
      name: 'Fushigidane',
    },
    {
      language: { name: 'ko', url: 'https://pokeapi.co/api/v2/language/3/' },
      name: '이상해씨',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '妙蛙種子',
    },
    {
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      name: 'Bulbizarre',
    },
    {
      language: { name: 'de', url: 'https://pokeapi.co/api/v2/language/6/' },
      name: 'Bisasam',
    },
    {
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      name: 'Bulbasaur',
    },
    {
      language: { name: 'it', url: 'https://pokeapi.co/api/v2/language/8/' },
      name: 'Bulbasaur',
    },
    {
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      name: 'Bulbasaur',
    },
    {
      language: { name: 'ja', url: 'https://pokeapi.co/api/v2/language/11/' },
      name: 'フシギダネ',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '妙蛙种子',
    },
  ],
  order: 1,
  pal_park_encounters: [
    {
      area: {
        name: 'field',
        url: 'https://pokeapi.co/api/v2/pal-park-area/2/',
      },
      base_score: 50,
      rate: 30,
    },
  ],
  pokedex_numbers: [
    {
      entry_number: 1,
      pokedex: {
        name: 'national',
        url: 'https://pokeapi.co/api/v2/pokedex/1/',
      },
    },
    {
      entry_number: 1,
      pokedex: { name: 'kanto', url: 'https://pokeapi.co/api/v2/pokedex/2/' },
    },
    {
      entry_number: 226,
      pokedex: {
        name: 'original-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/3/',
      },
    },
    {
      entry_number: 231,
      pokedex: {
        name: 'updated-johto',
        url: 'https://pokeapi.co/api/v2/pokedex/7/',
      },
    },
    {
      entry_number: 80,
      pokedex: {
        name: 'kalos-central',
        url: 'https://pokeapi.co/api/v2/pokedex/12/',
      },
    },
    {
      entry_number: 1,
      pokedex: {
        name: 'letsgo-kanto',
        url: 'https://pokeapi.co/api/v2/pokedex/26/',
      },
    },
    {
      entry_number: 68,
      pokedex: {
        name: 'isle-of-armor',
        url: 'https://pokeapi.co/api/v2/pokedex/28/',
      },
    },
  ],
  shape: {
    name: 'quadruped',
    url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
  },
  varieties: [
    {
      is_default: true,
      pokemon: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
    },
  ],
};

const terreno = {
  id: 3,
  name: 'grassland',
  names: [
    {
      language: { name: 'fr', url: 'https://pokeapi.co/api/v2/language/5/' },
      name: 'champs',
    },
    {
      language: { name: 'es', url: 'https://pokeapi.co/api/v2/language/7/' },
      name: 'pradera',
    },
    {
      language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
      name: 'grassland',
    },
  ],
  pokemon_species: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    { name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon-species/19/' },
    { name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon-species/23/' },
    { name: 'nidoran-f', url: 'https://pokeapi.co/api/v2/pokemon-species/29/' },
    { name: 'nidoran-m', url: 'https://pokeapi.co/api/v2/pokemon-species/32/' },
    { name: 'vulpix', url: 'https://pokeapi.co/api/v2/pokemon-species/37/' },
    { name: 'oddish', url: 'https://pokeapi.co/api/v2/pokemon-species/43/' },
    { name: 'growlithe', url: 'https://pokeapi.co/api/v2/pokemon-species/58/' },
    { name: 'ponyta', url: 'https://pokeapi.co/api/v2/pokemon-species/77/' },
    { name: 'farfetchd', url: 'https://pokeapi.co/api/v2/pokemon-species/83/' },
    { name: 'doduo', url: 'https://pokeapi.co/api/v2/pokemon-species/84/' },
    { name: 'drowzee', url: 'https://pokeapi.co/api/v2/pokemon-species/96/' },
    {
      name: 'lickitung',
      url: 'https://pokeapi.co/api/v2/pokemon-species/108/',
    },
    { name: 'tangela', url: 'https://pokeapi.co/api/v2/pokemon-species/114/' },
    {
      name: 'kangaskhan',
      url: 'https://pokeapi.co/api/v2/pokemon-species/115/',
    },
    { name: 'scyther', url: 'https://pokeapi.co/api/v2/pokemon-species/123/' },
    { name: 'tauros', url: 'https://pokeapi.co/api/v2/pokemon-species/128/' },
    {
      name: 'chikorita',
      url: 'https://pokeapi.co/api/v2/pokemon-species/152/',
    },
    {
      name: 'cyndaquil',
      url: 'https://pokeapi.co/api/v2/pokemon-species/155/',
    },
    { name: 'sentret', url: 'https://pokeapi.co/api/v2/pokemon-species/161/' },
    {
      name: 'igglybuff',
      url: 'https://pokeapi.co/api/v2/pokemon-species/174/',
    },
    { name: 'mareep', url: 'https://pokeapi.co/api/v2/pokemon-species/179/' },
    { name: 'hoppip', url: 'https://pokeapi.co/api/v2/pokemon-species/187/' },
    { name: 'sunkern', url: 'https://pokeapi.co/api/v2/pokemon-species/191/' },
    {
      name: 'girafarig',
      url: 'https://pokeapi.co/api/v2/pokemon-species/203/',
    },
    { name: 'elekid', url: 'https://pokeapi.co/api/v2/pokemon-species/239/' },
    { name: 'miltank', url: 'https://pokeapi.co/api/v2/pokemon-species/241/' },
    { name: 'raikou', url: 'https://pokeapi.co/api/v2/pokemon-species/243/' },
    { name: 'entei', url: 'https://pokeapi.co/api/v2/pokemon-species/244/' },
    { name: 'suicune', url: 'https://pokeapi.co/api/v2/pokemon-species/245/' },
    { name: 'torchic', url: 'https://pokeapi.co/api/v2/pokemon-species/255/' },
    {
      name: 'poochyena',
      url: 'https://pokeapi.co/api/v2/pokemon-species/261/',
    },
    {
      name: 'zigzagoon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/263/',
    },
    { name: 'taillow', url: 'https://pokeapi.co/api/v2/pokemon-species/276/' },
    {
      name: 'electrike',
      url: 'https://pokeapi.co/api/v2/pokemon-species/309/',
    },
    { name: 'plusle', url: 'https://pokeapi.co/api/v2/pokemon-species/311/' },
    { name: 'minun', url: 'https://pokeapi.co/api/v2/pokemon-species/312/' },
    { name: 'gulpin', url: 'https://pokeapi.co/api/v2/pokemon-species/316/' },
    { name: 'zangoose', url: 'https://pokeapi.co/api/v2/pokemon-species/335/' },
    { name: 'seviper', url: 'https://pokeapi.co/api/v2/pokemon-species/336/' },
    { name: 'castform', url: 'https://pokeapi.co/api/v2/pokemon-species/351/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon-species/3/' },
    { name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon-species/20/' },
    { name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon-species/24/' },
    { name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon-species/30/' },
    { name: 'nidoqueen', url: 'https://pokeapi.co/api/v2/pokemon-species/31/' },
    { name: 'nidorino', url: 'https://pokeapi.co/api/v2/pokemon-species/33/' },
    { name: 'nidoking', url: 'https://pokeapi.co/api/v2/pokemon-species/34/' },
    { name: 'ninetales', url: 'https://pokeapi.co/api/v2/pokemon-species/38/' },
    {
      name: 'jigglypuff',
      url: 'https://pokeapi.co/api/v2/pokemon-species/39/',
    },
    {
      name: 'wigglytuff',
      url: 'https://pokeapi.co/api/v2/pokemon-species/40/',
    },
    { name: 'gloom', url: 'https://pokeapi.co/api/v2/pokemon-species/44/' },
    { name: 'vileplume', url: 'https://pokeapi.co/api/v2/pokemon-species/45/' },
    { name: 'arcanine', url: 'https://pokeapi.co/api/v2/pokemon-species/59/' },
    { name: 'rapidash', url: 'https://pokeapi.co/api/v2/pokemon-species/78/' },
    { name: 'dodrio', url: 'https://pokeapi.co/api/v2/pokemon-species/85/' },
    { name: 'hypno', url: 'https://pokeapi.co/api/v2/pokemon-species/97/' },
    {
      name: 'electabuzz',
      url: 'https://pokeapi.co/api/v2/pokemon-species/125/',
    },
    { name: 'bayleef', url: 'https://pokeapi.co/api/v2/pokemon-species/153/' },
    { name: 'meganium', url: 'https://pokeapi.co/api/v2/pokemon-species/154/' },
    { name: 'quilava', url: 'https://pokeapi.co/api/v2/pokemon-species/156/' },
    {
      name: 'typhlosion',
      url: 'https://pokeapi.co/api/v2/pokemon-species/157/',
    },
    { name: 'furret', url: 'https://pokeapi.co/api/v2/pokemon-species/162/' },
    { name: 'flaaffy', url: 'https://pokeapi.co/api/v2/pokemon-species/180/' },
    { name: 'ampharos', url: 'https://pokeapi.co/api/v2/pokemon-species/181/' },
    {
      name: 'bellossom',
      url: 'https://pokeapi.co/api/v2/pokemon-species/182/',
    },
    { name: 'skiploom', url: 'https://pokeapi.co/api/v2/pokemon-species/188/' },
    { name: 'jumpluff', url: 'https://pokeapi.co/api/v2/pokemon-species/189/' },
    { name: 'sunflora', url: 'https://pokeapi.co/api/v2/pokemon-species/192/' },
    { name: 'scizor', url: 'https://pokeapi.co/api/v2/pokemon-species/212/' },
    {
      name: 'combusken',
      url: 'https://pokeapi.co/api/v2/pokemon-species/256/',
    },
    { name: 'blaziken', url: 'https://pokeapi.co/api/v2/pokemon-species/257/' },
    {
      name: 'mightyena',
      url: 'https://pokeapi.co/api/v2/pokemon-species/262/',
    },
    { name: 'linoone', url: 'https://pokeapi.co/api/v2/pokemon-species/264/' },
    { name: 'swellow', url: 'https://pokeapi.co/api/v2/pokemon-species/277/' },
    {
      name: 'manectric',
      url: 'https://pokeapi.co/api/v2/pokemon-species/310/',
    },
    { name: 'roselia', url: 'https://pokeapi.co/api/v2/pokemon-species/315/' },
    { name: 'swalot', url: 'https://pokeapi.co/api/v2/pokemon-species/317/' },
    { name: 'chimecho', url: 'https://pokeapi.co/api/v2/pokemon-species/358/' },
  ],
};
