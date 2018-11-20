// import { computed, observer } from '@ember/object';
// import { empty } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
    
    emailAddress: '', // predefine computed property
    // object/computed have some pre defined computed property
    // empty(), match() are the example of those
    // isDisabled: empty('emailAddress'), // just check for empty
    isValid: match('emailAddress', /^.+@.+\..+$/), // do the string contain valid email, it return true/false
    isDisabled: not('isValid'), // if email is not valid
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
