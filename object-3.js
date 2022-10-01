

var cars = [{
    make: 'Toyota',
    model: 'rav 4',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos'
}, {
    make: 'Lexus',
    model: 'rs 350',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos',
    
}, {
    make: 'Nissan',
    model: 'Sentra',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos'
}, {
    make: 'Hunda',
    model: 'Accord',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos'
}, {
    make: 'Hundia',
    model: 'Elantra',
    year: 2020,
    color: 'red',
    regNum: 12334,
    regState: 'Lagos'
}]

// for(k in cars)
// {
//    console.log(k) 
// }


// for(k in cars)
// {
//    console.log(cars[k]) 
// }
for(A in cars)
{
   //console.log(cars[k].make , cars[k].model) 
   console.log(cars[A].make ) 
}
// console.log(cars[1])

localStorage.setItem('cars', JSON.stringify(cars))

var cardata = localStorage.getItem('cars')
console.log(cardata)