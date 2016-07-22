import { Template } from 'meteor/templating';
import moment from 'moment';

import { Tweet } from '../../api/tweets/collection';
import './home.html';

// Helpers
Template.pagesHome.helpers({
    tweets() {
        return Tweet.find({}, {sort: {createdAt: -1}});
    },

    niceTime(createdAt) {
        return moment(createdAt).fromNow();
    }
});

// Events
Template.pagesHome.events({

});

// On Render
Template.pagesHome.rendered = function() {
    console.log('R - Template.pagesHome.rendered');
};