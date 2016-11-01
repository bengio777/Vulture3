import { Meteor } from 'meteor/meteor'

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1113343665413429',
    secret: 'fc3b67f18e861a86ff5b1c434e43b582'
});
