let guest_list: string [] = ['Ali' , 'Farhan' , 'Raza' , 'Tehmoor'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir / Madam ' + guest_list[i] + ',\nWe invite you on dinner tommorrow.\nThank You\n');
}; 
let not_present: string = "Farhan";
let new_guest: string = "Noman";
guest_list[1]=new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir / Madam ' + guest_list[i] + ',\nWe invite you on dinner tommorrow.\nThank You\n');
}; 
console.log(`Mr,${not_present} will not coming tomorrow dinner.`)
