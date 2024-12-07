import launchers from '@/data/weapons/launchers'

const specialCamouflages = {
  'CIGMA 2B': {
    multiplayer: {
      Policia: { amount: 10, type: 'direct_hit_kills' },
      Abstract: { amount: 10, type: 'aerial_scorestreaks' },
    },

    zombies: {
      CBRNE: { amount: 300, type: 'kills_while_pack_a_punched' },
      Technique: { amount: 75, type: 'armored_zombie_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'HE-1': {
    multiplayer: {
      Reboot: { amount: 10, type: 'one_shot_kills' },
      Dreamer: { amount: 10, type: 'scorestreaks_or_enemy_equipment' },
    },

    zombies: {
      Decrypt: { amount: 30, type: 'vermin_kills' },
      Renewed: { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },
}

export default {
  ...launchers.reduce((acc, weapon) => {
    acc[weapon] = {
      multiplayer: {
        // Military
        'Granite': { amount: 2, type: 'scorestreaks' },
        'Woodland': { amount: 5, type: 'scorestreaks' },
        'Savanna': { amount: 10, type: 'scorestreaks' },
        'Splinter': { amount: 15, type: 'scorestreaks' },
        'Moss': { amount: 20, type: 'scorestreaks' },
        'Saboteur': { amount: 25, type: 'scorestreaks' },
        'Digital': { amount: 30, type: 'scorestreaks' },
        'Tide': { amount: 40, type: 'scorestreaks' },
        'Red Tiger': { amount: 50, type: 'scorestreaks' },

        // Special
        ...specialCamouflages[weapon]?.multiplayer,

        // Mastery
        'Gold': { amount: 3, type: 'destructions_sm', times: 10 },
        'Diamond': { amount: 3, type: 'kills_sm', times: 10 },
        'Dark Spine': { amount: 5, type: 'destructions_sm', times: 3 },
        'Dark Matter': { amount: 5, type: 'kills_sm', times: 3 },
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
        'Mystic Gold': { amount: 3, type: 'kills_in_a_single_shot', times: 15 },
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
