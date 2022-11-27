import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue.darken1,
            secondary: colors.pink.lighten2,
            accent: colors.lightBlue.accent3,
            success:colors.teal.accent4,
            error: colors.red.accent3,
            dashboard:colors.blue.darken1,
            inputBackground:colors.grey.lighten3
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
