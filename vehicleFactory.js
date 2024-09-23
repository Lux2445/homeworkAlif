function VehicleFactory(type) {
    if (type === "Car") {
        return {
            type: "Car",
            wheels: 4,
            engine: "V6"
        };
    } else if (type === "Bike") {
        return {
            type: "Bike",
            wheels: 2
        };
    } else if (type === "Truck") {
        return {
            type: "Truck",
            wheels: 6,
            loadCapacity: "10 tons"
        };
    } else {
        return null; 
    }
}

const car = VehicleFactory("Car");
console.log(car);

const bike = VehicleFactory("Bike");
console.log(bike);

const truck = VehicleFactory("Truck");
console.log(truck);
