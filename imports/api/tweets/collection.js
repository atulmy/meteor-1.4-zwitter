import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Create Collection
export const Tweet = new Mongo.Collection('tweets');

// Define schema
Tweet.schema = new SimpleSchema({
    // _id auto generated

    tweet: {
        type: String
    },

    userId: {
        type: String
    },

    createdAt: {
        type: Date
    }
});

// Attach Schema
Tweet.attachSchema(Tweet.schema);