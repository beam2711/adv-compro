const registrationdate = new Date('2023-09-17T10:00:00Z');
const options ={
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'Asia/bankok'
}
const formatteddate = registrationdate.toLocaleDateString('th-TH', options);
console.log(`formatted date: ${formatteddate}`);