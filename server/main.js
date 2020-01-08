import { Meteor } from 'meteor/meteor';
 import '../imports/api/messages.js';
Meteor.startup(() => {
  // code to run on server at startup
});

ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '473111010307812',
    secret: 'ebc7ebf88e91be0a967d8d9d5d182924'
});


Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});
