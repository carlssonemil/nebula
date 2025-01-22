import subMachineGuns from '@/data/weapons/subMachineGuns'

const specialCamouflages = {
  'C9': {
    multiplayer: {
      Heatwave: { amount: 30, type: 'kills_shortly_after_sprinting' },
      Panther: { amount: 50, type: 'kills_with_suppressor' },
    },

    zombies: {
      Infrared: { amount: 30, type: 'parasite_kills' },
      Lynx: { amount: 300, type: 'kills_while_pack_a_punched' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'KSV': {
    multiplayer: {
      Kakapo: { amount: 2, type: 'kills_without_reloading', times: 10 },
      Throwback: { amount: 50, type: 'kills_while_moving' },
    },

    zombies: {
      Phoenix: { amount: 300, type: 'kills_with_dead_wire_equipped' },
      Throttle: { amount: 300, type: 'hipfire_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Tanto .22': {
    multiplayer: {
      'Amorphous': { amount: 50, type: 'kills_while_moving' },
      'Go Bananas': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      Solemn: { amount: 5, type: 'critical_kills_rapidly', times: 15 },
      Aloha: { amount: 300, type: 'kills_while_pack_a_punched' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'PP-919': {
    multiplayer: {
      'Radiant Bath': { amount: 30, type: 'hipfire_kills' },
      'Midnight Prowl': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
    },

    zombies: {
      Solvent: { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
      Shadow: { amount: 10, type: 'kills_without_reloading', times: 15 },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Jackal PDW': {
    multiplayer: {
      'Deep End': { amount: 30, type: 'kills_shortly_after_sprinting' },
      'Dread': { amount: 30, type: 'point_blank_kills' },
    },

    zombies: {
      Plunge: { amount: 300, type: 'kills_with_napalm_burst_equipped' },
      Distress: { amount: 300, type: 'hipfire_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Kompakt 92': {
    multiplayer: {
      Kingfisher: { amount: 30, type: 'hipfire_kills' },
      Blackthorn: { amount: 30, type: 'kills_shortly_after_sprinting' },
    },

    zombies: {
      'Tequila Sunset': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Voidthorn': { amount: 300, type: 'point_blank_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Saug': {
    multiplayer: {
      'Netherworld': { amount: 30, type: 'point_blank_kills' },
      'Solar Tide': { amount: 50, type: 'kills_while_moving' },
    },

    zombies: {
      'Whisper': { amount: 300, type: 'kills_with_dead_wire_equipped' },
      'Limewave': { amount: 300, type: 'point_blank_kills' },
    },

    warzone: {
      'Memento Mori': { amount: 5, type: 'hipfire_kills' },
      'Dreamcurrent': { amount: 3, times: 5, type: 'kills_sm' },
    },
  },

  'PPSh-41': {
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
  ...subMachineGuns.reduce((acc, weapon) => {
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
