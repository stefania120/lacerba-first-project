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

function printFunction(func: () => void): void {
    console.log(`calling function `);
    func();
    console.log(`function called function`);
}
printFunction(() => {
    console.log(greeting('Ludovico'));
});

