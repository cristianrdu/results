
let n1 = 0, n2 = 1, n3, i = 2, product = 1;

console.log(1);
for (let i = 2; i < 100; ++i)  
{
    n3 = n1 + n2;

    if (i < 11) 
    {
        product *= n3;
    }

    if (n3 > 10000) {
        break;
    }

    if (n3 % 5 == 0) {
        console.log(`${n3}`);
    }
    else {
        console.log(n3);
    }
    
    n1 = n2;
    n2 = n3;
}
console.log();
console.log(`The product of the first 10 numbers is: ${product}`)