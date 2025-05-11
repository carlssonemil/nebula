const militaryOrder = [
  // Multiplayer
  'Granite',
  'Woodland',
  'Savanna',
  'Splinter',
  'Moss',
  'Saboteur',
  'Digital',
  'Tide',
  'Red Tiger',

  // Zombies
  'Slate',
  'Desert',
  'Evergreen',
  'Rugged',
  'Grim',
  'Stripe',
  'Oceanic',
  'Whiteout',
  'Purple Tiger',

  // Warzone
  'Quartz',
  'Tundra',
  'Canyon',
  'Pine',
  'Undergrowth',
  'Snakeskin',
  'Siberia',
  'Smolder',
  'Blue Tiger',
]

const specialOrder = [
  // Placeholders
  '?',
  '??',

  // Assault Rifles
  // XM4
  'Muddled',
  'Machina',
  'Liquify',
  'Mainframe',

  // AK-74
  'Whitecap',
  'Vengeance',
  'Chlorine',
  'Haunted',

  // AMES 85
  'Heatstroke',
  'Burial',
  'Hyperion',
  'Graveyard',

  // GPR 91
  'Ambush',
  'Cacti Cathode',
  'Night Stalker',
  'Frostblossom',

  // Model L
  'Cherry Blossom',
  'Cedar',
  'Ghost Blossom',
  'Walnut',

  // Goblin Mk2
  'Astral Cry',
  'Hammerhead',
  'Astral Pride',
  'Blood Scent',

  // AS VAL
  'Crimson Steppes',
  'Elk',
  'Malachite',
  'Mountain Goat',

  // Krig C
  'Monochrome',
  'Dreadshade',
  'Sunny Splash',
  'Crowsbane',

  // Cypher 091
  'Scorching Slash',
  'Rotmist',
  'Glacial Blast',
  'Entropy',

  // Kilo 141
  'Virusscape',
  'Jade',
  'Netspore',
  'Jasper',

  // CR-56 AMAX
  'Teal Tiger',
  'Glade',
  'Yellow Tiger',
  'Everfrost',

  // Sub Machine Guns
  // C9
  'Heatwave',
  'Panther',
  'Infrared',
  'Lynx',

  // KSV
  'Kakapo',
  'Throwback',
  'Phoenix',
  'Throttle',

  // Tanto .22
  'Amorphous',
  'Go Bananas',
  'Solemn',
  'Aloha',

  // PP-919
  'Radiant Bath',
  'Midnight Prowl',
  'Solvent',
  'Shadow',

  // Jackal PDW
  'Deep End',
  'Dread',
  'Plunge',
  'Distress',

  // Kompakt 92
  'Kingfisher',
  'Blackthorn',
  'Tequila Sunset',
  'Voidthorn',

  // Saug
  'Netherworld',
  'Solar Tide',
  'Whisper',
  'Limewave',

  // PPSh-41
  'Skythrone',
  'Mirage_PPSh-41',
  'Cloudcrest',
  'Wasteland',

  // Ladra
  'Dataglow',
  'Broken',
  'Duskcode',
  'Fissure',

  // Light Machine Guns
  // PU-21
  'Neon Bath',
  'Vigilance',
  'Vivid',
  'Justice',

  // XMG
  'Buzz',
  'Snakebite',
  'Hiss',
  'Acid Slide',

  // GPMG-7
  'Brush Stroke',
  'Idyllic',
  'Impressionist',
  'Other World',

  // Feng 82
  'Sunblossom',
  'Bloodfang',
  'Asterwind',
  'Shadowfang',

  // Shotguns
  // Marine SP
  'Blueberry Lime',
  'Chromed Out',
  'Strawberry Mint',
  'Peel Out',

  // ASG-89
  'Night Terror',
  'Drive-In',
  'Dream Eater',
  'Coin-Op',

  // Maelstrom
  'Voidpulse',
  'Moonlit Grace',
  'Cinder Surge',
  'Lunar Flutter',

  // Marksman Rifles
  // SWAT 5.56
  'Ectoplasm',
  'Lumberjack',
  'Hyperspace',
  'Wrangler',

  // Tsarkov 7.62
  'Clear Water',
  'Concrete Jungle',
  'Harvest',
  'Desert Sunset',

  // AEK-973
  'Ablaze',
  'Mirage',
  'Blood Moon',
  'Voidflame',

  // DM-10
  'Mellowbloom',
  'Cobalt',
  'Furybloom',
  'Manta',

  // TR2
  'Chompers',
  'Restless',
  'Nibbles',
  'Burrowed',

  // Sniper Rifles
  // LW3A1 Frostline
  'Copper',
  'Permafrost',
  'Strata',
  'Eventide',

  // SVD
  'Pixelized',
  'Patchwork',
  'Cartridge',
  'Integration',

  // LR 7.62
  'Chaparral',
  'Nimbus',
  'Foxglove',
  'Overcast',

  // AMR Mod 4
  'Shadowthorn',
  'Tidal Harmony',
  'Scarthorn',
  'Marine Swirl',

  // HDR
  'Meadow Bloom',
  'Aurora Drip',
  'Lushbreeze',
  'Molten Hues',

  // Handguns
  // 9mm PM
  'Exabyte',
  'Blue Ring',
  'Yottabyte',
  'Red Ring',

  // Grekhova
  'Spin',
  'Dementer',
  'Hi-Fi',
  'Ceres',

  // GS45
  'Thistlevine',
  'Ragamuffin',
  'Velvetine',
  'Siamese',

  // Stryder .22
  'Ritual',
  'Transcend',
  'Wavy',
  'Condemn',

  // Launchers
  // CIGMA 2B
  'Policia',
  'Abstract',
  'CBRNE',
  'Technique',

  // HE-1
  'Reboot',
  'Dreamer',
  'Decrypt',
  'Renewed',

  // Melee
  // Knife
  'Dying Envy',
  'Tropical Leopard',
  'Dying Bloom',
  'Vacation Leopard',
  'Dying Ember',
  'Sunrise Leopard',

  // Baseball Bat
  'Torment',
  'Slip',
  'Banished',
  'Contort',
  'Spooked',
  'Skew',

  // Power Drill
  'Twilight Toadstool',
  'Thermal',
  'Glimmering Grove',
  'Shimmer',
  'Faerie Fungi',
  'Alloy',

  // Cleaver
  'Creepy Crypt',
  'Luminous Leopard',
  'Tragic Tomb',
  'Shock Leopard',

  // Skateboard
  'Ripple',
  'Bliss',
  'Aphotic',
  'Elation',

  // Katanas
  'Coral Crush',
  'Tempest',
  'Tiki Mist',
  'Brinehelm',

  // Bo Staff
  'Havoc',
  'Legacy',
  'Destruction',
  'Heirloom',

  // Sai
  'Seep',
  'Crestdeep',
  'Slime',
  'Trenchfall',

  // Nunchaku
  'Nested',
  'Radiate',
  'Skybound',
  'Focus',

  // Kali Sticks
  'Dunebreak',
  'Driftscape',
  'Reefshade',
  'Iceline',

  // Specials
  // Sirin 9mm
  'Nebulon',
  'Enchanted',
  'Starsync',
  'Tempt Fate',

  // D1.3 Sector
  'Meteorite',
  'Fast Times',
  'Moontrail',
  'Gutter Ball',

  // Nail Gun
  'Brimshard',
  'Shockstripe',
  'Chasm',
  'Fangflash',
]

const masteryOrder = [
  // Multiplayer
  'Gold',
  'Diamond',
  'Dark Spine',
  'Dark Matter',

  // Zombies
  'Mystic Gold',
  'Opal',
  'Afterlife',
  'Nebula',

  // Warzone
  'Gold Tiger',
  "King's Ransom",
  'Catalyst',
  'Abyss',
]

export default [
  // Military
  ...militaryOrder,

  // Specials
  ...specialOrder,

  // Mastery
  ...masteryOrder,
]
