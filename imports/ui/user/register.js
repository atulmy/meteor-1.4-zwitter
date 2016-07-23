import { Template } from 'meteor/templating';

import * as UserMethods from '../../api/users/methods';
import './register.html';

// Helpers
Template.userRegister.helpers({
    
});

// Events
Template.userRegister.events({
    'submit #form-register'(event, template) {
        event.preventDefault();

        console.log('E - submit #form-register');

        let input = {};
        input.username = template.$('#user-username').val();
        input.password = template.$('#user-password').val();
        console.log(input);

        if(input.username != '' && input.password != '') {
            UserMethods.register.call(input, (error, response) => {
                console.log('M - users.register / callback');

                if(error) {
                    alert(error.reason);
                } else {
                    if(response.success) {
                        Router.go('login', { message: response.message });
                    }
                }
            });
        }
    }
});

// On Render
Template.userRegister.rendered = function() {
    console.log('R - Template.userRegister.rendered');
};