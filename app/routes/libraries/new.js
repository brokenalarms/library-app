import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return this.store.createRecord('library');
  },
  buttonLabel: 'Create',
  setupController(controller, model) {
    this._super(controller, model);
    this.controller.set('title', 'Create a New Library');
    this.controller.set('buttonLabel', 'Create');
    },
  renderTemplate(){
    this.render('libraries/form');
  },
  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
