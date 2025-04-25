import handguns from '@/data/weapons/handguns'

const specialCamouflages = {
  '9mm PM': {
    multiplayer: {
      'Exabyte': { amount: 15, type: 'kills_shortly_after_switching_weapons' },
      'Blue Ring': { amount: 50, type: 'kills_with_suppressor' },
    },

    zombies: {
      'Yottabyte': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
      'Red Ring': { amount: 300, type: 'kills_with_dead_wire_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Grekhova': {
    multiplayer: {
      'Spin': { amount: 30, type: 'hipfire_kills' },
      'Dementer': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
    },

    zombies: {
      'Hi-Fi': { amount: 10, type: 'mangler_kills' },
      'Ceres': { amount: 5, type: 'critical_kills_rapidly', times: 15 },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'GS45': {
    multiplayer: {
      'Thistlevine': { amount: 30, type: 'point_blank_kills' },
      'Ragamuffin': { amount: 15, type: 'kills_shortly_after_switching_weapons' },
    },

    zombies: {
      'Velvetine': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Siamese': { amount: 300, type: 'hipfire_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Stryder .22': {
    multiplayer: {
      'Ritual': { amount: 50, type: 'kills_while_moving' },
      'Transcend': { amount: 50, type: 'kills_while_recon_combat_specialty_is_active' },
    },

    zombies: {
      'Wavy': { amount: 300, type: 'point_blank_kills' },
      'Condemn': { amount: 30, type: 'vermin_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },
}

export default {
  ...handguns.reduce((acc, weapon) => {
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
        'Granite': { amount: 5, type: 'eliminations' },
        'Woodland': { amount: 10, type: 'eliminations' },
        'Savanna': { amount: 15, type: 'eliminations' },
        'Splinter': { amount: 20, type: 'eliminations' },
        'Moss': { amount: 30, type: 'eliminations' },
        'Shade': { amount: 40, type: 'eliminations' },
        'Digital': { amount: 50, type: 'eliminations' },
        'Tide': { amount: 75, type: 'eliminations' },
        'Red Tiger': { amount: 100, type: 'eliminations' },

        // Special
        ...specialCamouflages[weapon]?.warzone,

        // Mastery
        'Gold Tiger': null,
        "King's Ransom": null,
        'Catalyst': null,
        'Abyss': null,
      },
    }

    return acc
  }, {}),
}
