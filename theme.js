/**
 * @module  Theme
 * @name    we-theme-pratt
 */

module.exports = {
  // theme config
  configs: {
    emailTemplates: {
      path: 'templates/email',
    },
    javascript: 'files/public/script.js',
    stylesheet: 'files/public/style.css'
  },

  autoLoadAllTemplates: true,
  // will be auto loaded
  templates: {},
  // set layouts here
  layouts: {
    'default': {
      template: __dirname + '/templates/server/layouts/default-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    },
    'fullwidth': {
      template: __dirname + '/templates/server/layouts/full-width-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        }
      }
    },
    'home': {
      template: __dirname + '/templates/server/layouts/home.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        }
      }
    },
    'eventHome': {
      template: __dirname + '/templates/server/layouts/event-home-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
      }
    },
    // 'eventAdmin': {
    //   template: __dirname + '/templates/server/layouts/event-admin-layout.hbs',
    //   regions: {
    //     highlighted: {
    //       name: 'Highlighted'
    //     },
    //     sidebar: {
    //       name: 'Sidebar'
    //     }
    //   }
    // }
  },
  widgets: {}
};
