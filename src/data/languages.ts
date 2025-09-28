interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Chinese",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "English",
        level: "B1",
        description: "I read fluently and write fluently",
        show: true
    },
    {
        name: "Italian",
        level: "B2",
        description: "I speak fluently and write fluently",
        show: false
    }
];

export default languages;