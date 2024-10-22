var guest_list = ['Ali', 'Farhan', 'Raza', 'Tehmoor'];
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir / Madam ' + guest_list[i] + ',\nWe invite you on dinner tommorrow.\nThank You\n');
// }; 
var not_present = "Farhan";
var new_guest = "Noman";
guest_list[1] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir / Madam ' + guest_list[i] + ',\nWe invite you on dinner tommorrow.\nThank You\n');
// }; 
// console.log(`Mr,${not_present} will not coming tomorrow dinner.`)
guest_list.unshift("Shaheen,", "Irfan", "Rashid");
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir / Madam ' + guest_list[i] + ',\nWe invite you on dinner tommorrow, We found big table so we decide to invite three more guests.\nThank You\n');
// }; 
console.log("\nUnfortunately we can not arrange big table , only two people are allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/ Madam ".concat(remove_guest, " You are invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir / Madam ' + guest_list[i] + ',\nYou are still invited on tomorrow dinner\nThank You\n');
}
;
guest_list.splice(0, 2);
console.log(guest_list);
