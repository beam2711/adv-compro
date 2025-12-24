let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

for(let va1 of values1) {
    for (let va2 of values2) {
        for (let va3 of values3){
            if (va1 === va2 && va2 === va3) {
                console.log(va1)
            }
        }
    }
 }