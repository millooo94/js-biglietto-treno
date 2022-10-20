const age = prompt('Quanti anni hai?')
const distance = prompt ('Quanti chilometri vuoi percorrere?')
const price = Number(distance) * 0.21

if (age < 18) {
    let discount = price * 0.2
    console.log ('È stato applicato uno sconto del 20%! Il suo prezzo è:', price.toFixed(2) - discount.toFixed(2),"€");
} else if (age > 65) {
    let discount = price * 0.4
    console.log ('È stato applicato uno sconto del 40%! Il suo prezzo è:', price.toFixed(2) - discount.toFixed(2),"€");
} else {
    console.log ('Non è stato applicato alcuno sconto. Il suo prezzo è:', price.toFixed(2),"€");
}

// if (age > 18) {
//     let newprice = (price - (price * 0.2));
//     console.log (newprice.toFixed(2), "€");
// }  else if (age > 65) {
//     let newprice = (price - (price * 0.4));
//     console.log (newprice.toFixed(2),"€");
// } else {
//     console.log (price.toFixed(2),"€");
// }