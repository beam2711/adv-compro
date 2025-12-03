function createlogentry(massage) {
    const now = new Date();
    const timstamp = now.toLocaleDateString('th-TH');
    
    const eventid =Math.random().toString(16).substring(2, 10).toUpperCase();
    const logmessage = massage.toString();
    return `[${timstamp}] [${eventid}] - [${logmessage}]`;
}

const log = createlogentry("User login successful");
console.log(log);