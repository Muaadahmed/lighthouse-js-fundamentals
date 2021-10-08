const cars = [{time: Date.now(), speed: 45},{time: Date.now(), speed: 54},{time: Date.now(), seed: 78}]
function carPassing(cars, speed){
    let timeSpeed = {};
    timeSpeed.time = Date.now();
    timeSpeed.speed = speed;
    cars.push(timeSpeed);
}


carPassing(cars, 98);
console.log(cars);