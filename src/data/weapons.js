import assaultRifles from './weapons/assaultRifles'
import subMachineGuns from './weapons/subMachineGuns'
import shotguns from './weapons/shotguns'
import lightMachineGuns from './weapons/lightMachineGuns'
import marksmanRifles from './weapons/marksmanRifles'
import sniperRifles from './weapons/sniperRifles'
import handguns from './weapons/handguns'
import launchers from './weapons/launchers'
import melee from './weapons/melee'
import specials from './weapons/specials'

import defaultProgress from '@/data/defaults/progress'

const categories = [
  { name: 'Assault Rifles', weapons: assaultRifles },
  { name: 'Sub Machine Guns', weapons: subMachineGuns },
  { name: 'Shotguns', weapons: shotguns },
  { name: 'Light Machine Guns', weapons: lightMachineGuns },
  { name: 'Marksman Rifles', weapons: marksmanRifles },
  { name: 'Sniper Rifles', weapons: sniperRifles },
  { name: 'Handguns', weapons: handguns },
  { name: 'Launchers', weapons: launchers },
  { name: 'Melee', weapons: melee },
  { name: 'Specials', weapons: specials },
]

export default categories.flatMap(({ name: category, weapons }) =>
  weapons.map((name) => ({
    category,
    name,

    progress: {
      ...defaultProgress[name],
    },
  }))
)
