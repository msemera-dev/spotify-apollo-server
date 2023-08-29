import { faker } from '@faker-js/faker';

export const songs = [
    {
        id: 1,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
    {
        id: 2,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
    {
        id: 3,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
    {
        id: 4,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
    {
        id: 5,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
    {
        id: 6,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
    {
        id: 7,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
    {
        id: 8,
        title: faker.music.songName(),
        genre: faker.music.genre(),
        singer: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: {
                city: faker.location.city(),
                province: faker.location.state(),
                country: faker.location.country()
            },
        },
    },
];