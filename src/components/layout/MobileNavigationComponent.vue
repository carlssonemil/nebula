<template>
  <transition name="fade">
    <nav class="mobile" v-if="show">
      <div class="header">
        <router-link to="/" class="logo">
          <div class="icon"></div>
          <p><span>Nebula</span></p>
        </router-link>
        <IconComponent name="times" @click="$emit('toggleMobileNavigation')" />
      </div>
      <div>
        <router-link to="/">{{ $t('general.multiplayer') }}</router-link>
        <router-link to="/zombies">{{ $t('general.zombies') }}</router-link>
        <router-link to="/warzone">{{ $t('general.warzone') }}</router-link>
      </div>
      <div class="footer">
        <router-link to="/settings">{{ $tc('general.setting', 2) }}</router-link>
        <router-link to="/about">{{ $t('general.about') }}</router-link>
        <router-link to="/tools">{{ $t('general.tools') }}</router-link>
        <router-link to="/requirements">{{ $tc('general.requirement', 2) }}</router-link>
        <a href="https://github.com/carlssonemil/nebula/issues/new?title=[Bug]%20" target="_blank">
          {{ $t('general.report_an_issue') }}
        </a>
        <a href="https://github.com/carlssonemil/nebula">
          <IconComponent name="github" />
          GitHub
        </a>
        <a href="https://discord.gg/kM3hmsZG">
          <IconComponent name="discord" />
          Discord
        </a>

        <a href="https://www.buymeacoffee.com/emilcarlsson" class="button">
          {{ $t('general.mobile_nav_support_link') }}
        </a>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
