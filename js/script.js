const age = Number(prompt('Quanti anni hai?'))
const distance = Number(prompt ('Quanti chilometri vuoi percorrere?'))
const price = (distance) * 0.21

if (age < 18) {
    let discount = price * 0.2
    let newprice = price - discount
    console.log ('È stato applicato uno sconto del 20%! Il suo prezzo è:', newprice.toFixed(2),"€");
} else if (age > 65) {
    let discount = price * 0.4
    let newprice = price - discount
    console.log ('È stato applicato uno sconto del 40%! Il suo prezzo è:', newprice.toFixed(2),"€");
} else {
    console.log ('Non è stato applicato alcuno sconto. Il suo prezzo è:', price.toFixed(2),"€");
}

