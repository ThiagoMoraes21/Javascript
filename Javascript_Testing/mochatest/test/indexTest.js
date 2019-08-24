const assert = require('chai').assert;
const app = require('../index');
// const sayHello = require('../index').sayHello;
// const addNumber = require('../index').addNumbers;

describe('App', () => {
    describe('sayHello()', () => {
        it('app should return hello', () => {
            let result = app.sayHello();
            assert.equal(result, 'hello');
        });
    
        it('sayHello should return type string', () => {
            let result = app.sayHello();
            assert.typeOf(result, 'string');
        });
    });

    describe('addNumbers()', () => {
        it('addNumbers should be abouve 5', () => {
            let result = app.addNumbers(5, 5);
            assert.isAbove(result, 5);
        });
    
        it('addNumbers should return type number',  () => {
            let result = app.addNumbers(5, 5);
            assert.typeOf(result, 'number');
        });
    });
})