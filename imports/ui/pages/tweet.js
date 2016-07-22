import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import * as TweetMethods from '../../api/tweets/methods';
import './tweet.html';

// Helpers
Template.pagesTweet.helpers({

});

// Events
Template.pagesTweet.events({
    'submit #form-tweet'(event, template) {
        event.preventDefault();

        let input = {};
        input.tweet = template.$('#form-tweet-text').val();

        console.log(input);

        TweetMethods.add.call(input, (error, response) => {
            console.log('M - tweet.add / callback');

            if(error) {
                alert('There was some error');
            } else {
                alert(response.message);

                if(response.success) {
                    Router.go('home');
                }
            }
        });
    }
});

// On Render
Template.pagesTweet.rendered = function() {
    console.log('R - Template.pagesTweet.rendered');
};