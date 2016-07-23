import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

// Route Configurations
    import '../../ui/layouts/default';
    import '../../ui/common/loading.html';

    Router.configure({
        layoutTemplate: 'layoutsDefault',
        loadingTemplate: 'commonLoading'
    });

// Check authentication for routes or except routes
    import '../../ui/common/auth.html';

    Router.onBeforeAction(function() {
        if(!Meteor.user()){
            if(Meteor.loggingIn()){
                this.render('commonLoading');
            } else {
                this.render('commonAuth');
            }
        } else {
            this.next();
        }
    }, {
        except: ['home', 'login', 'register']
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

// Users
    // Login
        import '../../ui/user/login';

        Router.route('/login/:message?', {
            name: 'login',

            template: 'userLogin'
        });

    // Register
        import '../../ui/user/register';

        Router.route('/register', {
            name: 'register',

            template: 'userRegister'
        });