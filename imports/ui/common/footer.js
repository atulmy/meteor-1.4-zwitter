import { Template } from 'meteor/templating';

import './footer.html';

// Helpers
Template.commonFooter.helpers({

});

// Events
Template.commonFooter.events({
    
});

// On Render
Template.commonFooter.rendered = function() {
    console.log('R - Template.commonFooter.rendered');
};