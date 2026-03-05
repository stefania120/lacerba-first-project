const x : number= 10;
 switch (x) {
    case 1:
        console.log('x vale 1');
        break;
    case 2:
        console.log('x vale 2');
        break;
    case 10:
        console.log('x vale 10');
        break;
    default:
        console.log('non conosco il valore di x');
        break;   
 }

 console.log('------------------');
 

if (x === 1) {
    console.log('x vale 1');
} else if (x === 2) {
    console.log('x vale 2');
} else if (x === 10) {
    console.log('x vale 10');
} else {
    console.log('non conosco il valore di x');
}