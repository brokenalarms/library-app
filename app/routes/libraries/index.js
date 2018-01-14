import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('library');
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
