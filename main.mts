import { faker } from '@faker-js/faker';



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


for (let i = 0; i < 10; i++) {
    const email = faker.internet.domainName();
    console.log(email);

}

// prova commit

