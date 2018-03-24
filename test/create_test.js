const assert = require('assert');

const User = require('../src/user');

describe('Creating user record',  () => {
    it('saves the user', (done) => {
       //1.create a new user
        const shiva = new User({name : 'shiva chaithanya reddy'});
        //2.save new user
        shiva.save()
            .then(() => {
                assert(!shiva.isNew);
                done();
            });
        //3.check whether saved successfully
    });
});