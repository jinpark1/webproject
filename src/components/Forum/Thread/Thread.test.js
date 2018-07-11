const thread = require('./ThreadTest');

test('First Test', () => {
    expect( thread.test(1,2) ).toEqual(3);
})

test('ComponentDidMount to return All if passed in All', () => {
    expect( thread.componentDidMount('All') ).toEqual('Here is all the data from all the categories.');
})

test('ComponentDidMount to return category name', () => {
    expect( thread.componentDidMount('Software') ).toEqual('Here is all the data from specific category');
})