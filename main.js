// today's forecast in degrees kelvin
const kelvin = 293;

// today's temp converted from Kelvin to Celsius
const celsius = kelvin - 273;

// today's temp converted from celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// round the result of the fhrenheit calculation down to the nearest int
var fahrenheit = Math.floor(fahrenheit);

var newton = celsius / (33/100);
var newton = Math.floor(newton);

console.log(`${kelvin} converts to ${fahrenheit} degrees Fahrenheit.`)
console.log(`${kelvin} converts to ${newton} degrees Newton.`)
