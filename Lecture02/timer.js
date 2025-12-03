const startime = Date.now();

function someheavytask() {
    let result = 0;
}

const endtime = Date.now();
const duration = endtime - startime;
console.log(`eleapsed time: ${duration} ms`)