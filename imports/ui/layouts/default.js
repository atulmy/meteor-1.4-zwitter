import { Template } from 'meteor/templating';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import '../common/header';
import '../common/footer';
import './default.html';

// Helpers
Template.layoutsDefault.helpers({

});

// Events
Template.layoutsDefault.events({

});

// On Render
Template.layoutsDefault.rendered = function() {
    console.log('R - Template.layoutsDefault.rendered');
};