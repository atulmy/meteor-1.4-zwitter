import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

// Route Configurations
    import '../../ui/layouts/default';
    import '../../ui/common/loading.html';
    Router.configure({
        layoutTemplate: 'layoutsDefault',
        loadingTemplate: 'commonLoading'
    });

// Pages
    // Home
        import '../../ui/pages/home';

        Router.route('/', {
            name: 'home',

            template: 'pagesHome',

            waitOn() {
                return Meteor.subscribe('tweets');
            }
        });

    // Tweet
        import '../../ui/pages/tweet';

        Router.route('/tweet', {
            name: 'tweet',

            template: 'pagesTweet'
        });