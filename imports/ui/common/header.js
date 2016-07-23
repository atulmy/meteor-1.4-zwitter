import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import './header.html';

// Helpers
Template.commonHeader.helpers({

});

// Events
Template.commonHeader.events({
    'click #logout'(event, template) {
        event.preventDefault();

        console.log('E - click #logout');

        Meteor.logout((error) => {
            if(error) {
                alert(error.reason);
            } else {
                Router.go('home');
            }
        })
    }
});

// On Render
Template.commonHeader.rendered = function() {
    console.log('R - Template.commonHeader.rendered');
};