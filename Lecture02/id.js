function generatetemid() {
    const randompart = Math.random().toString(36).substring(2,8);
    return randompart.toUpperCase();
}

const orderid = generatetemid();
console.log(`Your order ID is :${orderid}`);