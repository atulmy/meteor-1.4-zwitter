import { Meteor } from 'meteor/meteor';

import { Tweet } from './collection';

Meteor.publish('tweets', () => {
    return Tweet.find();
});