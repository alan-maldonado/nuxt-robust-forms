import { DefaultConfigOptions } from '@formkit/vue';
// import { createProPlugin, inputs } from '@formkit/pro';
import { createAutoAnimatePlugin } from '@formkit/addons';
import createToolTipPlugin from './formkit-plugins/tooltip-plugin';
import '@/formkit-plugins/tooltip-plugin/styles.css';
// import '@formkit/pro/genesis';

const config: DefaultConfigOptions = {
  // theme: 'genesis',
  plugins: [
    createAutoAnimatePlugin(),
    createToolTipPlugin(),
    // createProPlugin('', inputs),
  ],
  rules: {
    username_is_unique: function (node) {
      const usernames = ['amaldonado', 'alanmaldonado'];
      return !usernames.includes(node.value as string);
    },
  },

  messages: {
    en: {
      validation: {
        username_is_unique({ args, name, node }) {
          return `${node.value} is already taken`;
        },
      },
    },
  },
};

export default config;
