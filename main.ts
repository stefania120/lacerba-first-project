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

const numbers: number[] = [1,2,3,4,5];


const squaredNumbers: number[] = numbers.map(num => num * num);
const oddNumbers: number[] = numbers.filter(num => num % 2 === 0).map(num => num + 10);

// find: primo pari  
const primoPari = numbers.find(num => num % 2 === 0);

// findIndex: indice primo pari
const indicePrimoPari = numbers.findIndex(num => num % 2 === 0); // 1

const esistePari = numbers.some(num => num % 2 === 0); // true

// every: sono tutti pari?
const tuttiPari = numbers.every(num => num % 2 === 0); // false


console.log(numbers);
console.log(squaredNumbers);
console.log(oddNumbers);
console.log(primoPari);
console.log(indicePrimoPari);
console.log(esistePari);
console.log(tuttiPari);

