import Route from '@ember/routing/route';
import { match, not } from '@ember/object/computed';

export default Route.extend({
	model(){
		return {
			emailAddress: '',
			headerMessage: 'Coming Soon',
			responseMessage: '',
			isValid: match('emailAddress', /^.+@.+\..+/),
			isDisabled: not('isValid'),
		}
	},
	actions: {
		saveInvitation(){
			const newInvitation =
			this.store.createRecord('invitation', { email: this.get('emailAddress')});
			newInvitation.save()
				.then(() => {
					this.controller.set('model.responseMessage', 'Thanks for registering!');
					this.controller.set('model.emailAddress', '')
				});
		}
	}	
});