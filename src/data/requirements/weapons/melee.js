import melee from '@/data/weapons/melee'

const specialCamouflages = {
  'Knife': {
    multiplayer: {
      'Dying Envy': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
      'Tropical Leopard': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Dying Bloom': { amount: 300, type: 'kills_with_brain_rot_equipped' },
      'Vacation Leopard': { amount: 75, type: 'armored_zombie_kills' },
    },

    warzone: {
      'Dying Ember': { amount: 5, type: 'kills_shortly_after_sprinting' },
      'Sunrise Leopard': { amount: 5, type: 'kills_after_damage' },
    },
  },

  'Baseball Bat': {
    multiplayer: {
      'Torment': { amount: 15, type: 'kills_shortly_after_switching_weapons' },
      'Slip': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Banished': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Contort': { amount: 30, type: 'vermin_kills' },
    },

    warzone: {
      'Spooked': { amount: 5, type: 'kills_while_affected_by_tactical' },
      'Skew': { amount: 5, type: 'kills_under_uav' },
    },
  },

  'Power Drill': {
    multiplayer: {
      'Twilight Toadstool': { amount: 50, type: 'kills_while_recon_combat_specialty_is_active' },
      'Thermal': { amount: 15, type: 'kills_shortly_after_sprinting' },
    },

    zombies: {
      'Glimmering Grove': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Shimmer': { amount: 10, type: 'mangler_kills' },
    },

    warzone: {
      'Faerie Fungi': { amount: 3, type: 'kills_in_a_single_match', times: 5 },
      'Alloy': { amount: 2, type: 'kills_without_taking_damage', times: 5 },
    },
  },

  'Cleaver': {
    multiplayer: {
      'Creepy Crypt': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
      'Luminous Leopard': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Tragic Tomb': { amount: 75, type: 'armored_zombie_kills' },
      'Shock Leopard': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
    },

    warzone: {
      'Ghostly Grounds': { amount: 3, times: 5, type: 'kills_sm' },
      'Blazing Leopard': { amount: 5, type: 'kills_under_uav' },
    },
  },

  'Skateboard': {
    multiplayer: {
      'Ripple': { amount: 15, type: 'kills_shortly_after_switching_weapons' },
      'Bliss': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Aphotic': { amount: 100, type: 'zombie_kills_after_using_field_upgrade' },
      'Elation': { amount: 300, type: 'kills_while_pack_a_punched' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Katanas': {
    multiplayer: {
      'Coral Crush': { amount: 5, type: 'kills_in_a_single_match', times: 3 },
      'Tempest': { amount: 50, type: 'kills_while_enforcer_combat_specialty_is_active' },
    },

    zombies: {
      'Tiki Mist': { amount: 300, type: 'kills_at_rare_rarity_or_higher' },
      'Brinehelm': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Bo Staff': {
    multiplayer: {
      'Havoc': { amount: 50, type: 'kills_while_strategist_combat_specialty_is_active' },
      'Legacy': { amount: 5, type: 'kills_in_a_single_match', times: 3 },
    },

    zombies: {
      'Destruction': { amount: 300, type: 'kills_with_dead_wire_equipped' },
      'Heirloom': { amount: 30, type: 'parasite_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Sai': {
    multiplayer: {
      'Seep': { amount: 50, type: 'kills_while_recon_combat_specialty_is_active' },
      'Crestdeep': { type: 'one_kill_without_taking_damage', times: 30 },
    },

    zombies: {
      'Slime': { amount: 300, type: 'kills_with_napalm_burst_equipped' },
      'Trenchfall': { amount: 10, type: 'mangler_kills' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Nunchaku': {
    multiplayer: {
      'Nested': { type: 'one_kill_without_taking_damage', times: 30 },
      'Radiate': { amount: 15, type: 'kills_shortly_after_switching_weapons' },
    },

    zombies: {
      'Skybound': { amount: 300, type: 'kills_with_brain_rot_equipped' },
      'Focus': { amount: 30, type: 'vermin_eliminations' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },

  'Kali Sticks': {
    multiplayer: {
      'Dunebreak': { amount: 50, type: 'kills_while_recon_combat_specialty_is_active' },
      'Driftscape': { amount: 5, type: 'kills_in_a_single_match', times: 3 },
    },

    zombies: {
      'Reefshade': { amount: 30, type: 'vermin_eliminations' },
      'Iceline': { amount: 300, type: 'kills_with_cryo_freeze_equipped' },
    },

    warzone: {
      '?': null,
      '??': null,
    },
  },
}

export default {
  ...melee.reduce((acc, weapon) => {
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
        'Gold Tiger': null,
        "King's Ransom": null,
        'Catalyst': null,
        'Abyss': null,
      },
    }

    return acc
  }, {}),
}
