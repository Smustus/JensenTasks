import { users } from '../script/users.js';
console.log(users);
function filterByCountry(arr, landcode) {
    return arr.filter(user => {
        return user.nat === landcode;
    });
}
console.log(filterByCountry(users, "ES"));
function filterByGender(arr, gender) {
    if (gender === "Male") {
        return arr.filter(user => {
            return (user.name.title === "Mr" || user.name.title === "Monsieur");
        });
    }
    if (gender === "Female") {
        return arr.filter(user => {
            return (user.name.title === "Mrs" || user.name.title === "Ms" || user.name.title === "Miss" || user.name.title === "Mademoiselle" || user.name.title === "Madame");
        });
    }
}
console.log(filterByGender(users, "Male"));
console.log(filterByGender(users, "Female"));
function listEmails(arr) {
    return arr.map(user => {
        return user.email;
    });
}
console.log(listEmails(users));
function reformatEmail(arr) {
    return arr.map(user => {
        const name = user.email.split("@");
        const [firstName, lastName] = name[0].split('.');
        const country = user.nat;
        if (country === "UK") {
            return `${lastName}.${firstName}@evilcorp.uk`;
        }
        if (country === "ES") {
            return `${lastName}.${firstName}@evilcorp.ee`;
        }
        return `${lastName}.${firstName}@evilcorp.${country.toLowerCase()}`;
    });
}
console.log(reformatEmail(users));
/* FR 	.fr
CH 	.ch
DE 	.de
NO 	.no
US 	.us
TR 	.tr
FI 	.fi
GB 	.uk
NL 	.nl
NZ 	.nz
AU 	.au
ES 	.ee
IE 	.ie
DK 	.dk
IR 	.ir
BR 	.br
CA 	.ca */ 
