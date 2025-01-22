import marksmanRifles from '@/data/weapons/marksmanRifles'

const specialCamouflages = {
  'SWAT 5.56': {
    multiplayer: {
      Ectoplasm: { amount: 50, type: 'kills_with_4x_or_higher_magnification_scope' },
      Lumberjack: { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
    },

    zombies: {
      Hyperspace: { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
      Wrangler: { amount: 75, type: 'armored_zombie_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Tsarkov 7.62': {
    multiplayer: {
      'Clear Water': { amount: 15, type: 'longshot_kills' },
      'Concrete Jungle': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
    },

    zombies: {
      'Harvest': { amount: 100, type: 'zombie_kills_while_affected_by_tactical' },
      'Desert Sunset': { amount: 300, type: 'kills_with_dead_wire_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'AEK-973': {
    multiplayer: {
      Ablaze: { amount: 2, type: 'kills_without_reloading', times: 10 },
      Mirage: { amount: 50, type: 'kills_with_4x_or_higher_magnification_scope' },
    },

    zombies: {
      'Blood Moon': { amount: 300, type: 'kills_with_napalm_burst_equipped' },
      'Voidflame': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'DM-10': {
    multiplayer: {
      Mellowbloom: { amount: 50, type: 'kills_with_suppressor' },
      Cobalt: { amount: 15, type: 'longshot_kills' },
    },

    zombies: {
      Furybloom: { amount: 5, type: 'critical_kills_rapidly', times: 15 },
      Manta: { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'TR2': {
    multiplayer: {
      '?': null,
      '??': null,
    },

    zombies: {
      '?': null,
      '??': null,
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },
}

export default {
  ...marksmanRifles.reduce((acc, weapon) => {
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
        'Opal': { amount: 30, type: 'special_zombie_kills' },
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
