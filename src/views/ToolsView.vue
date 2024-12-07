<template>
  <div class="container">
    <h3>{{ $t('pages.tools.title') }}</h3>
    <p>{{ $t('pages.tools.subtitle') }}</p>

    <div class="tools">
      <div class="tool" v-for="tool in tools" :key="tool.title">
        <div class="logo">
          <img :src="tool.icon" />
        </div>
        <div class="content">
          <h5>{{ tool.title }}</h5>
          <p>{{ tool.description }}</p>
          <a :href="tool.url" target="_blank">{{ tool.url }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import beamsmasherCalculatorLogo from '@/assets/tools/beamsmasher-calculator.png'
import declassifiedLogo from '@/assets/tools/declassified.png'
import loadoutizeLogo from '@/assets/tools/loadoutize.png'

export default {
  data() {
    return {
      tools: [
        {
          title: 'Beamsmasher Calculator',
          description:
            'Simple calculator to quickly validate the Beam Smasher equation step on the Terminus map.',
          icon: beamsmasherCalculatorLogo,
          url: 'https://beamsmasher-calculator.fr/',
        },
        {
          title: 'DECLASSIFIED',
          description: 'A map tool for Call of Duty Zombies.',
          icon: declassifiedLogo,
          url: 'https://declassified.app/',
        },
        {
          title: 'Loadoutize',
          description:
            'Craft, customize, and share weapon configurations. Explore top-rated loadouts and dominate the battlefield.',
          icon: loadoutizeLogo,
          url: 'https://www.loadoutize.com/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;

  @media (max-width: $tablet) {
    font-size: 16px;
  }
}

a {
  @media (max-width: $tablet) {
    font-size: 16px;
  }
}

.tools {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0;

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
  }

  .tool {
    background: $elevation-1-color;
    border: 2px solid $elevation-3-color;
    border-radius: $border-radius;
    display: flex;
    overflow: hidden;
    padding: 20px;
    position: relative;
    transition: $transition;

    .logo {
      align-items: center;
      background: $elevation-2-color;
      border-radius: $border-radius;
      display: flex;
      justify-content: center;
      margin-right: 20px;
      overflow: hidden;
      padding: 20px;
      position: relative;
      transition: $transition;
      width: 100px;

      img {
        height: 100%;
        object-fit: contain;
        width: 100%;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h5 {
      font-size: 20px;
      font-weight: 600;
      position: relative;
      z-index: 2;
    }

    p {
      font-size: 16px;
      line-height: 1.4;
      margin-bottom: 10px;
      position: relative;
      z-index: 2;
    }
  }
}
</style>
