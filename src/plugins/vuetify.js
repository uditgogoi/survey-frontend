import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.lightBlue,
            secondary: colors.green.darken1,
            accent: colors.lightBlue.accent3,
            error: colors.red.accent3,
            dashboard:colors.grey.darken4
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        },
      },
      icons: {
        iconfont: 'mdi',
      },
});
