// conversion
function mileToGoj(mile) {
    const goj = mile * 1760;
    return goj;
}
console.log(13, "mile = ", mileToGoj(13), "goj");


function kwhToCiloCal(kwh) {
    return kwh * 860;
}
console.log(5, "kwh = ", kwhToCiloCal(5), "Cilocalory");


function hourToSecond(hour) {
    return hour * 3600;
}
const hour = 2;
console.log(hour, "hour = ", hourToSecond(hour), "second");


function cmTometer(cm) {
    return cm / 100;
}
const cm = 345;
console.log(cm, "cm = ", cmTometer(cm), " m");


function inchTocm(inch) {
    return inch * 2.54;
}
const inch = 320;
console.log(inch, "inch = ", inchTocm(inch), "cm");


function poundToKg(pound) {
    return pound * 0.453;
}
const pound = 5;
console.log(pound, "pound = ", poundToKg(pound), 'kg');


function gojToMeter(goj) {
    return goj * 0.91;
}
const goj = 300;
console.log(goj, " goj = ", gojToMeter(goj), 'm');