const fullname  = " Anirach  Mingkhwan  ";

const cleanedname = fullname.trim();
console.log(`trimmed name: '${cleanedname}'`);

const nameparts = cleanedname.split(" ");
console.log("name parts:", nameparts);

const finalparts = nameparts.filter(Boolean);
console.log("filtered name parts:", finalparts)

const firsname = finalparts[0];
console.log(`Hello '${firsname}'`);