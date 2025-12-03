const a = 10
const b = 5

const add = function(x, y) {
    return x + y
}

const addarrow = (x, y) => {
    return x + y
}

const subtrat = (x, y) => {
    const result = x - y
    return result
}

console.log(`addition: ${add(a, b)}`)
console.log(`addition using arrow function: ${addarrow(a, b)}`)
console.log(`subtraction using arrow function: ${subtrat(a, b)}`)