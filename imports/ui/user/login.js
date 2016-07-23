import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './login.html';

// Helpers
Template.userLogin.helpers({
    message() {
        return Router.current().params.message;
    }
});

// Events
Template.userLogin.events({
    'submit #form-login'(event, template) {
        event.preventDefault();

        console.log('E - submit #form-login');

        let username = template.$('#user-username').val();
        let password = template.$('#user-password').val();

        if(username != '' && password != '') {
            Meteor.loginWithPassword(username, password, (error) => {
                if(error) {
                    alert(error.reason);
                } else {
                    Router.go('tweet');
                }
            });
        }
    }
});

// On Render
Template.userLogin.rendered = function() {
    console.log('R - Template.userLogin.rendered');
};