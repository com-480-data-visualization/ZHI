export type Player = {
    firstName: string;
    lastName: string;
    age: number;
    position: string;
    jnumber: number;
    faceImageURL: string; 
    evolutionImageURL: string;
}

export const players: Player[] = [

    {
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 36,
        position: 'AT',
        jnumber: 10,
        faceImageURL: 'https://cdn.sofifa.net/players/158/023/24_120.png',
        evolutionImageURL: 'evolution.png'
    },
    {
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 39,
        position: 'AT',
        jnumber: 7,
        faceImageURL: 'https://cdn.sofifa.net/players/020/801/24_120.png',
        evolutionImageURL: 'evolution.png'
    },
    {
        firstName: 'Kylian',
        lastName: 'Mbappé',
        age: 25,
        position: 'AT',
        jnumber: 10,
        faceImageURL: 'https://cdn.sofifa.net/players/231/747/24_120.png',
        evolutionImageURL: 'evolution.png'
    },
    {
        firstName: 'Jr',
        lastName: 'Neymar',
        age: 32,
        position: 'AT',
        jnumber: 10,
        faceImageURL: 'https://cdn.sofifa.net/players/190/871/24_120.png',
        evolutionImageURL: 'evolution.png'
    },

];