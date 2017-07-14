import uuid from 'uuid/v4'

const producers = [
    {
        id: uuid(),
        name: 'Cursor',
        price: 30,
        cookiePerSeconds: 1,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Grandma',
        price: 100,
        cookiePerSeconds: 5,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Cookie Farm',
        price: 500,
        cookiePerSeconds: 20,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Cookie Tree',
        price: 1500,
        cookiePerSeconds: 100,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Cookie Factory',
        price: 3000,
        cookiePerSeconds: 250,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Cookie Mine',
        price: 7000,
        cookiePerSeconds: 600,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Cookie Lab',
        price: 10000,
        cookiePerSeconds: 900,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Cookie Time Machine',
        price: 20000,
        cookiePerSeconds: 1900,
        purchased: 0
    },
    {
        id: uuid(),
        name: 'Cookie World',
        price: 999999999999,
        cookiePerSeconds: 9999999999999999999,
        purchased: 0
    }
]

export default producers