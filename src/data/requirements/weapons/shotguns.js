import shotguns from '@/data/weapons/shotguns'

const specialCamouflages = {
  'Marine SP': {
    multiplayer: {
      'Blueberry Lime': { amount: 30, type: 'hipfire_kills' },
      'Chromed Out': { amount: 30, type: 'kills_shortly_after_sprinting' },
    },

    zombies: {
      'Strawberry Mint': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Peel Out': { amount: 300, type: 'hipfire_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'ASG-89': {
    multiplayer: {
      'Night Terror': { amount: 30, type: 'point_blank_kills' },
      'Drive-In': { amount: 50, type: 'kills_while_moving' },
    },

    zombies: {
      'Dream Eater': { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
      'Coin-Op': { amount: 30, type: 'parasite_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Maelstrom': {
    multiplayer: {
      'Voidpulse': { amount: 30, type: 'point_blank_kills' },
      'Moonlit Grace': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' }
    },

    zombies: {
      'Cinder Surge': { amount: 10, type: 'kills_without_reloading', times: 15 },
      'Lunar Flutter': { amount: 300, type: 'hipfire_kills' }
    },

    warzone: {
      'Lush Rift': { amount: 10, type: 'hipfire_kills' },
      'Amethyst Glow': { amount: 10, type: 'kills_shortly_after_sprinting' }
    }
  }
}

export default {
  ...shotguns.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        // Military
        'Granite': { amount: 5, type: 'headshots' },
        'Woodland': { amount: 10, type: 'headshots' },
        'Savanna': { amount: 15, type: 'headshots' },
        'Splinter': { amount: 20, type: 'headshots' },
        'Moss': { amount: 30, type: 'headshots' },
        'Saboteur': { amount: 40, type: 'headshots' },
        'Digital': { amount: 50, type: 'headshots' },
        'Tide': { amount: 75, type: 'headshots' },
        'Red Tiger': { amount: 100, type: 'headshots' },

        // Special
        ...specialCamouflages[weapon]?.multiplayer,

        // Mastery
        'Gold': { amount: 10, type: 'double_kills' },
        'Diamond': { amount: 3, type: 'kills_without_dying', times: 10 },
        'Dark Spine': { amount: 3, type: 'triple_kills' },
        'Dark Matter': { amount: 5, type: 'kills_without_dying', times: 3 },
      },

      zombies: {
        // Military
        'Slate': { amount: 100, type: 'critical_kills' },
        'Desert': { amount: 200, type: 'critical_kills' },
        'Evergreen': { amount: 300, type: 'critical_kills' },
        'Rugged': { amount: 400, type: 'critical_kills' },
        'Grim': { amount: 600, type: 'critical_kills' },
        'Stripe': { amount: 800, type: 'critical_kills' },
        'Oceanic': { amount: 1000, type: 'critical_kills' },
        'Whiteout': { amount: 1500, type: 'critical_kills' },
        'Purple Tiger': { amount: 2000, type: 'critical_kills' },

        // Special
        ...specialCamouflages[weapon]?.zombies,

        // Mastery
        'Mystic Gold': { amount: 10, type: 'rapid_kills', times: 15 },
        'Opal': { amount: 30, type: 'special_zombie_eliminations' },
        'Afterlife': { amount: 20, type: 'consecutive_kills_without_taking_damage', times: 10 },
        'Nebula': { amount: 10, type: 'elite_zombie_kills' },
      },

      warzone: {
        // Military
        'Quartz': { amount: 5, type: 'eliminations' },
        'Tundra': { amount: 10, type: 'eliminations' },
        'Canyon': { amount: 15, type: 'eliminations' },
        'Pine': { amount: 20, type: 'eliminations' },
        'Undergrowth': { amount: 30, type: 'eliminations' },
        'Snakeskin': { amount: 40, type: 'eliminations' },
        'Siberia': { amount: 50, type: 'eliminations' },
        'Smolder': { amount: 75, type: 'eliminations' },
        'Blue Tiger': { amount: 100, type: 'eliminations' },

        // Special
        ...specialCamouflages[weapon]?.warzone,

        // Mastery
        'Gold Tiger': { amount: 5, type: 'kills_while_most_wanted' },
        "King's Ransom": { amount: 3, type: 'kills_without_dying', times: 5 },
        'Catalyst': { amount: 5, type: 'kills_on_affected_enemies_with_tacticals' },
        'Abyss': { amount: 5, type: 'kills_without_dying', times: 2 },
      },
    }

    return acc
  }, {}),
}
