function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms);
    });
}

async function longRunningOperarion() {
    return 42;
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(2000);
    const result = await longRunningOperarion();
    console.log("Result:", result);
    console.log("Stop!!");
}

console.log("Before run");
run();
console.log("After run");