const istatus = 200;

 if (istatus === 200){
    console.log('OK');
 } else if (istatus === 400){
    console.log('bad rewuest')
 } else {
    console.log('other status')
 }

 switch (istatus) {
    case 200:
        console.log('OK')
        break
    case 400:
        console.log('bad')
        break
    default:
        console.log('other')
 }

 const result = istatus === 200 ? "OK" : "not OK"
 console.log(result)