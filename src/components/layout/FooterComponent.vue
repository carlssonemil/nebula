<template>
  <footer class="container">
    <div>
      <i18n-t keypath="general.made_by" scope="global">
        <a href="https://emilcarlsson.se/" class="copyright">Emil Carlsson</a>
      </i18n-t>
      <i18n-t v-if="translatedBy" keypath="general.translated_by" scope="global">
        <a :href="translatedBy.url">{{ translatedBy.username }}</a>
      </i18n-t>
    </div>

    <div>
      <router-link to="/about">{{ $t('general.about') }}</router-link>
      <router-link to="/tools">{{ $t('general.tools') }}</router-link>
      <router-link to="/requirements">{{ $tc('general.requirement', 2) }}</router-link>
      <a href="https://github.com/carlssonemil/nebula/issues/new?title=[Bug]%20" target="_blank">
        {{ $tc('general.report_an_issue') }}
      </a>
      <a href="https://github.com/carlssonemil/nebula" v-tippy="{ content: 'GitHub' }" class="icon">
        <IconComponent name="github" />
      </a>
      <a href="https://discord.gg/VzKpZbBPkM" v-tippy="{ content: 'Discord' }" class="icon">
        <IconComponent name="discord" />
      </a>
      <LocaleSwitcherComponent />
    </div>
  </footer>
</template>

<script>
import { translatedBy } from '@/i18n/locales.js'
import LocaleSwitcherComponent from '@/components/LocaleSwitcherComponent.vue'

export default {
  components: {
    LocaleSwitcherComponent,
  },

  computed: {
    translatedBy() {
      const currentLocale = this.$root.$i18n.locale
      const translator = translatedBy[currentLocale]

      if (!translator) return null

      return {
        url: translator.github,
        username: translator.name || translator.github.split('/').pop(),
      }
    },
  },
}
</script>
