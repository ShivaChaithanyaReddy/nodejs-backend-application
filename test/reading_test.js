const assert = require('assert');

const User = require('../src/user');

describe('reading users from database', () => {

    let shiva;

    beforeEach((done) => {
        shiva = new User({name: 'shiva'});
        shiva.save()
            .then( () => done())
    });

    it('finds all the users with the name of shiva', (done) => {
        User.find({name: 'shiva'})
            .then( (users) => {
                assert(users[0]._id.toString() === shiva._id.toString());
                done();
            })
            .catch((error) => console.error(error));
    });

    it('find user with particular id', ()  => {
        User.findOne({_id: shiva._id})
            .then( (user) => {
                assert(user.name === 'shiva');
            });
        });
});