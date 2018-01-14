import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.store.findRecord('library', params.library_id)	
	},
	renderTemplate(){
		this.render('libraries/form');
	},
	actions: {
		saveLibrary(library){
			library.save().then(() => this.transitionTo('libraries'));
		},
		willTransition(transition){
			const model = this.controller.get('model');
			if(model.get('hasDirtyAttributes')){
				const confirmation = confirm('You have unsaved changes. Leave this form anyway?');
				if (confirmation){
					model.rollbackAttributes();
				} else {
					transition.abort();
				}
			}
		}
	}
});
