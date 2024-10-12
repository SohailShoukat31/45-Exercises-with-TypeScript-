var guest_list = ['Ali', 'Farhan', 'Raza', 'Tehmoor'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir / Madam ' + guest_list[i] + ',\nWe invite you on dinner tommorrow.\nThank You\n');
}
;
var not_present = "Farhan";
var new_guest = "Noman";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir / Madam ' + guest_list[i] + ',\nWe invite you on dinner tommorrow.\nThank You\n');
}
;
console.log("Mr,".concat(not_present, " will not coming tomorrow dinner."));
