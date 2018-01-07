import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
export default Controller.extend({
	emailAddress: '',
	headerMessage: 'Coming Soon',
	responseMessage: '',
	isValid: match('emailAddress', /^.+@.+\..+/),
	isDisabled: not('isValid'),
	actions: {
		saveInvitation(){
			const newInvitation =
			this.store.createRecord('invitation', { email: this.get('emailAddress')});
			newInvitation.save()
				.then(() => {
					this.set('responseMessage', 'just saved email yo')
					this.set('emailAddress', '');
				});
		}
	}
});