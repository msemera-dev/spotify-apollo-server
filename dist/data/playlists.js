import { faker } from '@faker-js/faker';
export const playlists = [
    {
        title: faker.music.songName(),
        description: faker.word.words(),
        image: faker.image.url(),
        songs: [
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
        ]
    }
];
