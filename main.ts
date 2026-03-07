function greeting(name: string, lang: 'en' | 'it' | 'es' | 'fr' = 'it'): string {

const greetMap = {
    en: 'Hello',
    it: 'Ciao',
    es: 'Hola',
    fr: 'Bonjour',
};

const greetingWord = greetMap[lang];

return `${greetingWord} ${name}`;
}

const random = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
}

console.log(greeting('Ludovico', 'en'));
console.log(greeting('Marco' ));

console.log('Random number between 3 and 5', random(3, 5));

