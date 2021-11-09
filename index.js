const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram" || "Sarah";
const totalAmount = 200;

if (age < 18) {
    console.log("We can not allow minors by law, we ask you friendly to stay outside")
} else {
    console.log("Welcome to our pub, we wish you a pleasant stay!")
}
if (isFemale) {
    console.log("Welcome to Ladies Night at our pub, we wish you a pleasant stay!")
} else {
    console.log("Tonight is ladies night, we can not allow you to enter this night")
}
if (driverStatus === "bob") {
    console.log("You are allowed to drive home!")
} else {
    console.log("You are not allowed to drive home!")
}
if (age <= 18 && age <= 25) {
    console.log("You get 50% off!")
} else {
    consloge.log("You do not get 50% off")
}
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("You get a free beer!")
}
if (totalAmount >= "50" && totalAmount < "100") {
    console.log("You get free bitterballen and nachos!")
}
if (totalAmount >= "100") {
    console.log("You get a free bottle of Champagne!")
}