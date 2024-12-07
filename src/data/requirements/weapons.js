import assaultRifles from '@/data/requirements/weapons/assaultRifles'
import handguns from '@/data/requirements/weapons/handguns'
import launchers from '@/data/requirements/weapons/launchers'
import lightMachineGuns from '@/data/requirements/weapons/lightMachineGuns'
import marksmanRifles from '@/data/requirements/weapons/marksmanRifles'
import melee from '@/data/requirements/weapons/melee'
import shotguns from '@/data/requirements/weapons/shotguns'
import sniperRifles from '@/data/requirements/weapons/sniperRifles'
import subMachineGuns from '@/data/requirements/weapons/subMachineGuns'
import specials from '@/data/requirements/weapons/specials'

export default {
  ...assaultRifles,
  ...handguns,
  ...launchers,
  ...lightMachineGuns,
  ...marksmanRifles,
  ...melee,
  ...shotguns,
  ...sniperRifles,
  ...subMachineGuns,
  ...specials,
}
