class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log("The machine is running");
    }

    display() {
        const container = document.getElementById("cars-container");
        const carDiv = document.createElement("div");
        carDiv.classList.add("cars");
        carDiv.innerHTML = `<h2>${this.constructor.name}</h2>
                        <p>Model: ${this.model}</p>
                        <p>Color: ${this.color}</p>
                        <p>Wheels: ${this.wheels}</p>`;
        container.appendChild(carDiv);
    }
}

class SportsCar extends Cars {
    constructor(model, color, wheels, engine) {
        super(model, color, wheels);
        this.engine = engine;
    }

    display() {
        super.display();
        const carDiv = document.querySelector("#cars-container > .cars:last-of-type");
        carDiv.innerHTML += `<p>Engine: ${this.engine}</p>`;
    }
}

class SUV extends Cars {
    constructor(model, color, wheels, capacity) {
        super(model, color, wheels);
        this.capacity = capacity;
    }

    display() {
        super.display();
        const carDiv = document.querySelector("#cars-container > .cars:last-of-type");
        carDiv.innerHTML += `<p>Capacity: ${this.capacity} passengers</p>`;
    }
}

class Truck extends Cars {
    constructor(model, color, wheels, payload) {
        super(model, color, wheels);
        this.payload = payload;
    }

    display() {
        super.display();
        const carDiv = document.querySelector("#cars-container > .cars:last-of-type");
        carDiv.innerHTML += `<p>Payload: ${this.payload} lbs</p>`;
    }
}

//
const car1 = new SportsCar("Porsche 911", "Red", 4, "V6");
const car2 = new SUV("Toyota RAV4", "Black", 4, 5);
const car3 = new Truck("Ford F-150", "White", 6, 1500);

// 
car1.start(); // The machine is running
car2.start(); // The machine is running
car3.start(); // The machine is running

//
car1.display();
car2.display();
car3.display();


///////////// 2222222


class TrafficLight {
    constructor() {
        this.redLight = document.querySelector('.red-light');
        this.yellowLight = document.querySelector('.yellow-light');
        this.greenLight = document.querySelector('.green-light');
        this.stopText = document.querySelector('.stop-text');
        this.goText = document.querySelector('.go-text');
    }

    turnOnRed() {
        this.redLight.style.backgroundColor = 'red';
        this.yellowLight.style.backgroundColor = 'gray';
        this.greenLight.style.backgroundColor = 'gray';
        this.stopText.style.display = 'block';
        this.goText.style.display = 'none';
    }

    turnOnGreen() {
        this.redLight.style.backgroundColor = 'gray';
        this.yellowLight.style.backgroundColor = 'gray';
        this.greenLight.style.backgroundColor = 'green';
        this.stopText.style.display = 'none';
        this.goText.style.display = 'block';
    }
}

function changeLight() {
    const trafficLight = new TrafficLight();
    const color = prompt('Enter color (красный или зеленый):');

    if (color === 'красный') {
        trafficLight.turnOnRed();
    } else if (color === 'зеленый') {
        trafficLight.turnOnGreen();
    } else {
        alert('вводите правильные цвета');
    }
}
