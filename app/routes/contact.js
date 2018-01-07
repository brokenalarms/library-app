import Route from '@ember/routing/route';
import { and, match, not, gte } from '@ember/object/computed';

export default Route.extend({
    model(){
        return {
            emailAddress: '',
            message: '',
            isValidEmail: match('emailAddress', /^.+@.+\..+/),
            isLongEnough: gte('message.length', 5),
            isValid: and('isLongEnough', 'isValidEmail'),
            isDisabled: not('isValid'),
        }
    },
    actions: {
        sendContactMessage(model){
            this.store.createRecord('contact', {
                email: model.emailAddress,
                message: model.message,
            })
                .save()
                .then(() => {
                    this.set('controller.model.emailAddress', '');
                })
        }
    }
});
