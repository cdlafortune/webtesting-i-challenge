const enhancer = require('../enhancing/enhancer.js');


const data = [
    {
        name: 'Iron sword',
        enhancement: 15,
        durability: 56
    },
    {
        name: 'Diamond sword',
        enhancement: 19,
        durability: 85
    },
    {
        name: 'Golden axe',
        enhancement: 10,
        durability: 25
    }
];


test('success', () => {
    expect(() => {
        enhancer.success(data[0]).toHaveLength(1);
    });
});

test('failure', () => {
    expect(() => {
        enhancer.fail(data[1]).toHaveLength(1);
    });
});

test('repair', () => {
    expect(() => {
        enhancer.repair(data[2]).toHaveLength(1);
    });
});

test('get', () => {
    expect(() => {
        enhancer.get(data[0]).toBe('[+16]Iron Sword');
    });
});