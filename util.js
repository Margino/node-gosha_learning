const events = require('events');
const util   = require('util');

const Cars = function(model) {
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

const bmw   = new Cars('BMW');
const audi  = new Cars('Audi');
const volvo = new Cars('Volvo');

const cars = [bmw, audi, volvo];

cars.forEach((car) => {
    car.on('speed', (text) => {
        console.log(`${car.model} speed is ${text}`);
    });
});

bmw.emit('speed', '254.5 km\/h');
audi.emit('speed', '320 km\/h');
volvo.emit('speed', '200 km\/h');
