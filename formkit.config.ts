import { DefaultConfigOptions } from '@formkit/vue';

const config: DefaultConfigOptions = {
  theme: 'genesis',
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
