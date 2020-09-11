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


test('success', async () => {
    const res = await enhancer.success(data[0]);
    console.log("success:", res);
    expect(res.enhancement).toBe(16);
});

test('failure', async () => {
    const res = await enhancer.fail(data[1]);

    console.log("failure:", res)
    expect(res.durability).toBe(75);
    expect(res.enhancement).toBe(18);
});

test('repair', async () => {
    const res = await enhancer.repair(data[2]);
    console.log("repair:", res);
    expect(res.durability).toBe(100);
});

test('get', async () => {
    const res = await enhancer.get(data[0]);

    expect(res.name).toBe('[+15] Iron sword');
});