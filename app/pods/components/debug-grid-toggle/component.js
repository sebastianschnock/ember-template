import Ember from 'ember'

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['debug-grid-toggle'],
	click() {
		$('body').toggleClass('show-grid')
	},
	actions: {
		toggleDebugGrid() {
			$('body').toggleClass('show-grid')
		}
	}
})
