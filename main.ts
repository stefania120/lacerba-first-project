function greeting(name: string, lang: 'en' | 'it' | 'es' | 'fr' = 'it'){

const greetMap = {
    en: 'Hello',
    it: 'Ciao',
    es: 'Hola',
    fr: 'Bonjour',
};

const greetingWord = greetMap[lang];

return `${greetingWord} ${name}`;
}

console.log(greeting('Ludovico', 'en'));
console.log(greeting('Marco' ));
