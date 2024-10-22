let places : string []= ['Capetown' , 'Delhi', 'Faisalabad', 'Bangkok' , 'Ahmedabad']
//  console.log('original ' + places);
console.log('copy ' +[ ...places].sort());
// console.log('original ' + places);
console.log('copy ' +[ ...places].sort().reverse);
console.log('original ' + places.sort().reverse());


