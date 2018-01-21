import Route from '@ember/routing/route';
import { notEmpty } from '@ember/object/computed';

export default Route.extend({
  model() {
    return this.store.findAll('library');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('isValid', notEmpty('name'));
  },
  actions: {
    deleteLibrary(library) {
        const confirmation = confirm('Are you sure?', 'Delete library');
        if (confirmation) {
            library.destroyRecord();
        }
    }
  }
});
