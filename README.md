# ember-template
My template for a quick app set up with Ember

# Components installed

## Linting
- [eslint](http://eslint.org/)
- [stylelint](http://stylelint.io/)

## Layout
- [susy grid system](http://susy.oddbird.net/)
- [breakpoint sass](https://github.com/at-import/breakpoint)
- [modular scale sass](https://github.com/modularscale/modularscale-sass)

## CSS
- [sass support](https://github.com/aexmachina/ember-cli-sass)
- [Meyer CSS reset](http://meyerweb.com/eric/tools/css/reset/)

## Ember
- [ember truth helpers](https://github.com/jmurphyau/ember-truth-helpers)
- [ember route actions](https://github.com/DockYard/ember-route-action-helper)

# Other changes
- personalized `.editorconfig`
- a vertical rhythm system

# How to use this template
- change `podModulePrefix` in `environment.js` to your app name
- change your app name in `styles/base/_config.scss`
- change the id of the main container in `pods/application/template.hbs` to your app name
- adapt the horizontal grid in `styles/base/_grid.scss` to your needs
- adapt the vertical grid in `styles/base/_vertical-rhythm.scss` to your needs
- basic html element styles are found in `styles/base/_native.scss`

# ToDo
- use lodash as es6 module: https://github.com/lodash/babel-plugin-lodash
- try https://github.com/rwjblue/ember-template-lint
