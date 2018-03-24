const assert  = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {

    let shiva;

    beforeEach((done) => {
        shiva = new User({name: 'shiva'});
        shiva.save()
            .then(() => done());
    });

    it('model instance to remove', (done)=> {
        shiva.remove()
            .then(() => {
                User.findOne({name: 'shiva'})
            })
            .then( (user) => {
                assert(user === null);
                done();
            });
    });
});