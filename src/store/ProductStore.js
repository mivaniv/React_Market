import product from './productPng.png'

export const PRODUCTS = [
    {
        id: 1,
        imageUrl: product,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 87,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
            date: "14:00 22.08.2021"
        }]},
    {
        id: 2,
        imageUrl: product,
        name: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 15,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021",
        },
            {
                id: 1,
                productId: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam1.',
                date: "14:00 22.08.2021"
            }]},
    {
        id: 3,
        imageUrl: product,
        name: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 76,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021"
        }]},
    {
        id: 4,
        imageUrl: product,
        name: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 4553,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021"
        }] },
    {
        id: 5,
        imageUrl: product,
        name: 'Product 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 0,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021"
        }]},
    {
        id: 6,
        imageUrl: product,
        name: 'Product 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 1,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021"
        }]},
    {
        id: 7,
        imageUrl: product,
        name: 'Product 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 43,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021"
        }]
    },
    {
        id: 8,
        imageUrl: product,
        name: 'Product 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 75,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021"
        }]
    },
    {
        id: 9,
        imageUrl: product,
        name: 'Product 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
        count: 666,
        size:{
            width:200,
            height:200
        },
        weight:"200g",
        comments: [{
            id: 3,
            productId: 1,
            description: "some text here",
            date: "14:00 22.08.2021"
        }]
    },
];

export const SINGLE_PRODUCT = {
    imageUrl: product,
    name: 'Some product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aperiam architecto aut blanditiis dicta doloribus eos, molestiae mollitia nemo nisi nulla officiis quas sapiente, suscipit voluptatum.Adipisci alias nemo ullam.',
    count: 666,
    size:{
        width:200,
        height:200
    },
    weight:"200g",
    comments: [{
        id: 3,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
    }]
}
