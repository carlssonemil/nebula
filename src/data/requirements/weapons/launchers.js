import launchers from '@/data/weapons/launchers'

const specialCamouflages = {
  'CIGMA 28': {
    multiplayer: {
      Policia: { amount: 15, type: 'direct_hit_kills' },
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
      Reboot: null,
      Dreamer: { amount: 10, type: 'scorestreaks_or_enemy_equipment' },
    },

    zombies: {
      Decrypt: null,
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
        'Granite': { amount: 5, type: 'kills' },
        'Woodland': { amount: 10, type: 'kills' },
        'Savanna': { amount: 15, type: 'kills' },
        'Splinter': { amount: 20, type: 'kills' },
        'Moss': { amount: 30, type: 'kills' },
        'Shade': { amount: 40, type: 'kills' },
        'Digital': { amount: 50, type: 'kills' },
        'Tide': { amount: 75, type: 'kills' },
        'Red Tiger': { amount: 100, type: 'kills' },

        // Special
        ...specialCamouflages[weapon]?.multiplayer,

        // Mastery
        'Gold': { amount: 5, type: 'kills_without_dying', times: 3 },
        'Diamond': { amount: 3, type: 'kills_without_dying', times: 10 },
        'Dark Spine': { amount: 3, type: 'triple_kills' },
        'Dark Matter': { amount: 5, type: 'kills_without_dying', times: 3 },
      },

      zombies: {
        // Military
        'Granite': { amount: 100, type: 'kills' },
        'Woodland': { amount: 200, type: 'kills' },
        'Savanna': { amount: 300, type: 'kills' },
        'Splinter': { amount: 400, type: 'kills' },
        'Moss': { amount: 600, type: 'kills' },
        'Shade': { amount: 800, type: 'kills' },
        'Digital': { amount: 1000, type: 'kills' },
        'Tide': { amount: 1500, type: 'kills' },
        'Red Tiger': { amount: 2000, type: 'kills' },

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
