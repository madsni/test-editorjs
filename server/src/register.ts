import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: 'PCOEditorjs',
    plugin: 'editorjs-strapi-plugin',
    type: 'richtext',
    inputSize: {
      default: 12,
      isResizable: true,
    },
  });
};

export default register;
