<template>
  <div class="overall-progress-component">
    <div class="counter" v-for="(counter, name) in overallProgress" :key="name">
      <img
        :src="`https://emilcarlsson.se/nebula/camouflages/${convertToKebabCase(name)}.png`"
        :alt="name"
        onerror="javascript:this.src='/military-gradient.svg'" />
      <p>
        <span>{{ name }} {{ $t('general.unlocked') }}</span>
        <span>{{ counter }}/{{ totalWeapons }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useStore } from '@/stores/store'
import { convertToKebabCase } from '@/utils/utils'

export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState(useStore, ['weapons']),

    overallProgress() {
      const { mode, weapons } = this

      if (mode === 'multiplayer') {
        return {
          'Gold': weapons.filter((w) => w.progress.multiplayer['Gold']).length,
          'Diamond': weapons.filter((w) => w.progress.multiplayer['Diamond']).length,
          'Dark Spine': weapons.filter((w) => w.progress.multiplayer['Dark Spine']).length,
          'Dark Matter': weapons.filter((w) => w.progress.multiplayer['Dark Matter']).length,
        }
      } else if (mode === 'zombies') {
        return {
          'Mystic Gold': weapons.filter((w) => w.progress.zombies['Mystic Gold']).length,
          'Opal': weapons.filter((w) => w.progress.zombies['Opal']).length,
          'Afterlife': weapons.filter((w) => w.progress.zombies['Afterlife']).length,
          'Nebula': weapons.filter((w) => w.progress.zombies['Nebula']).length,
        }
      } else if (mode === 'warzone') {
        return {
          'Gold Tiger': weapons.filter((w) => w.progress.warzone['Gold Tiger']).length,
          "King's Ransom": weapons.filter((w) => w.progress.warzone["King's Ransom"]).length,
          'Catalyst': weapons.filter((w) => w.progress.warzone['Catalyst']).length,
          'Abyss': weapons.filter((w) => w.progress.warzone['Abyss']).length,
        }
      } else {
        return {}
      }
    },

    totalWeapons() {
      return this.weapons.length
    },
  },

  methods: {
    convertToKebabCase,
  },
}
</script>

<style lang="scss" scoped>
.overall-progress-component {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 0 25px;
  padding: 10px;

  .counter {
    align-items: center;
    display: flex;
    font-size: 14px;
    justify-content: center;

    + .counter {
      margin-left: 40px;
    }

    img {
      $size: 20px;

      border-radius: $size;
      height: 100%;
      margin-right: 8px;
      object-fit: cover;
      position: relative;
      width: $size;
      z-index: 1;
    }

    p {
      cursor: default;
      font-weight: 400;

      span:first-child {
        margin-right: 5px;
      }

      span:last-child {
        font-weight: 600;
      }
    }
  }

  @media (max-width: $tablet) {
    justify-content: space-around;
    gap: 10px;
    margin-top: 0;

    .counter + .counter {
      margin-left: 0;
    }

    .counter p span:first-child {
      display: none;
    }
  }

  @media (max-width: $mobile) {
    align-items: flex-start;
    flex-direction: column;

    .counter p span:first-child {
      display: inline-block;
    }
  }
}
</style>
