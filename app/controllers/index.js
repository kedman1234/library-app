// import { computed, observer } from '@ember/object';
import { empty } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
    
    emailAddress: '', // predefine computed property
    isDisabled: empty('emailAddress'),

    // isDisabled: computed('emailAddress', function() {
    //     return this.get('emailAddress') === '';
    // }),
    // actualEmailAddress: computed('emailAddress', function() {
    //     console.log("actual email address coputed ", this.get('emailAddress'));
    // }),
    // emailAddressChange: observer('emailAddress', function() {
    //     console.log('observer is called', this.get('emailAddress'));
    // })
});
