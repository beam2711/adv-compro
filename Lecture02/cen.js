function censorword(sentence, wordtocensor) {
    const regex = new RegExp(wordtocensor, 'gi')
    const censortext = sentence.replace(regex, '***');
    return censortext;
}

const originalpost = "JavaScript is fun, but sometimes JavaScript can be tricky"
const cleanpost = censorword(originalpost, "JavaScript");
console.log(cleanpost);
