const numbers: number[] = [1, 2, 3, 4, 5];

let sum = 0;
for(const n of numbers) {
    sum += n;
}

const avg = sum / numbers.length;
console.log('Somma: ', sum);
console.log('Media: ', avg);
