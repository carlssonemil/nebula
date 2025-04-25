import specials from '@/data/weapons/specials'

const specialCamouflages = {
  'Sirin 9mm': {
    multiplayer: {
      // Override Military (only special that requires headshots, for now...)
      'Granite': { amount: 5, type: 'headshots' },
      'Woodland': { amount: 10, type: 'headshots' },
      'Savanna': { amount: 15, type: 'headshots' },
      'Splinter': { amount: 20, type: 'headshots' },
      'Moss': { amount: 30, type: 'headshots' },
      'Saboteur': { amount: 40, type: 'headshots' },
      'Digital': { amount: 50, type: 'headshots' },
      'Tide': { amount: 75, type: 'headshots' },
      'Red Tiger': { amount: 100, type: 'headshots' },

      'Nebulon': { amount: 30, type: 'kills_shortly_after_sprinting' },
      'Enchanted': { amount: 50, type: 'kills_while_moving' },
    },

    zombies: {
      // Override Military (only special that requires critical kills, for now...)
      'Slate': { amount: 100, type: 'critical_kills' },
      'Desert': { amount: 200, type: 'critical_kills' },
      'Evergreen': { amount: 300, type: 'critical_kills' },
      'Rugged': { amount: 400, type: 'critical_kills' },
      'Grim': { amount: 600, type: 'critical_kills' },
      'Stripe': { amount: 800, type: 'critical_kills' },
      'Oceanic': { amount: 1000, type: 'critical_kills' },
      'Whiteout': { amount: 1500, type: 'critical_kills' },
      'Purple Tiger': { amount: 2000, type: 'critical_kills' },

      'Starsync': { amount: 300, type: 'hipfire_kills' },
      'Tempt Fate': { amount: 30, type: 'parasite_kills' },
    },

    warzone: {
      'Synthora': { amount: 5, type: 'kills_while_moving' },
      'Guidance': { amount: 5, type: 'consecutive_kills_without_taking_damage', times: 5 },
    },
  },

  'D1.3 Sector': {
    multiplayer: {
      'Meteorite': { amount: 2, type: 'kills_without_reloading' },
      'Fast Times': { amount: 30, type: 'one_shot_kills' },
    },

    zombies: {
      'Moontrail': { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
      'Gutter Ball': { amount: 300, type: 'kills_while_pack_a_punched' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Nail Gun': {
    multiplayer: {
      'Brimshard': { amount: 30, type: 'kills_shortly_after_sprinting' },
      'Shockstripe': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
    },

    zombies: {
      'Chasm': { amount: 300, type: 'kills_while_pack_a_punched' },
      'Fangflash': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },
}

export default {
  ...specials.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        // Military
        'Granite': { amount: 5, type: 'kills' },
        'Woodland': { amount: 10, type: 'kills' },
        'Savanna': { amount: 15, type: 'kills' },
        'Splinter': { amount: 20, type: 'kills' },
        'Moss': { amount: 30, type: 'kills' },
        'Saboteur': { amount: 40, type: 'kills' },
        'Digital': { amount: 50, type: 'kills' },
        'Tide': { amount: 75, type: 'kills' },
        'Red Tiger': { amount: 100, type: 'kills' },

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
        'Slate': { amount: 100, type: 'kills' },
        'Desert': { amount: 200, type: 'kills' },
        'Evergreen': { amount: 300, type: 'kills' },
        'Rugged': { amount: 400, type: 'kills' },
        'Grim': { amount: 600, type: 'kills' },
        'Stripe': { amount: 800, type: 'kills' },
        'Oceanic': { amount: 1000, type: 'kills' },
        'Whiteout': { amount: 1500, type: 'kills' },
        'Purple Tiger': { amount: 2000, type: 'kills' },

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
        "King's Ransom": { amount: 3, type: 'kills_without_dying', times: 2 },
        'Catalyst': { amount: 5, type: 'kills_on_affected_enemies_with_tacticals' },
        'Abyss': { amount: 5, type: 'kills_without_dying', times: 1 },
      },
    }

    return acc
  }, {}),
}
