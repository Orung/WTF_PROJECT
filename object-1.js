//objects made simple 
var carMake
var carModel
var carYear
var carColor
var regNum
var regState



carMake = 'Lexus'
carModel = 'rx 350'
carYear = 2022
carColor = 'red'
regNum = '12345'
regState = 'Lagos'

var studentName, regNum, level, course, gender;

studentName = 'Aminat'
regNum = 'st123456'
level = 200
course = 'BSC IT'
gender = 'Female'

var car = {
    make: null,
    'c model': 'rs 350',
    Year: 2022,
    color: 'red',
    regNum: '12345',
    regState: 'Lagos',
    speed : function(d,t){
       return d / t 
    }
}

var cars = {
make : 'Toyota',
model : 'rav 4',
'mYear' : 2020,
color : 'red',
regNum : 12334,
regState : 'Lagos'
}

cars['color'] = 'green'

console.log(cars.color)

var newCars = cars
 newCars.model = 'yaris'
console.log(newCars.model)
console.log(cars.model)

var model = 'rav 4'
var nModel = model
nModel = 'camry'
console.log(model,nModel)
console.log('...................................')
 //var car = ['lexus','rs 350',2022,'red','12345','lagos']
 for (const key in car) {
    console.log(car[key])
 }

 console.log('...................................')


for (T in car ){
    console.log(car)
    }
    
console.log(car.speed(400,60))
