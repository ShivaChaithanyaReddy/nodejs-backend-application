var mongoose = require('mongoose');


before((done) => {
    mongoose.connect('mongodb://localhost/users');

    mongoose.connection
        .once('open', () => {done(); })
        .on('error', (error) => {
            console.warn('Warning: ', error)
        });
});




//executed before each of the test in test suite runs.
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        //ready to execute the next test.
        done();
    });
});