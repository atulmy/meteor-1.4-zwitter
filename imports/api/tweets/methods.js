import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Tweet, TweetSchema } from './collection';

console.log(TweetSchema);

export const add = new ValidatedMethod({
    name: 'tweet.add',

    validate: new SimpleSchema({
        tweet: {
            type: String
        }
    }).validator(),

    run({ tweet }) {
        console.log('M - tweet.add / run');

        let response = {
            success: false,
            message: 'There was some sever error.'
        };

        if(tweet != '') {
            let success = Tweet.insert({
                tweet,
                userId: 'b',
                createdAt: new Date()
            });

            if(success) {
                response.success = true;
                response.message = 'Tweet sent!';
            }
        }

        return response;
    }
});