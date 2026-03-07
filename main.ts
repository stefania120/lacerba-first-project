function hello(name: string): string {
    console.log( "Hello, world!" );
    console.log(`hello from, ${name}!`); 
    return `questa è la stringa di ritorno`;
}

hello('Ludovico');
hello('Marco');

console.log(`\n-----------------------------\n`);


function greeting(name: string) {
    return `Ciao ${name}`;
}

console.log(greeting('Ludovico'));
console.log(greeting('Marco'));
