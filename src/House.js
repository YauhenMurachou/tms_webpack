class House {

	constructor(width, length, floors) {
		this.width = width;
		this.length = length;
		this.floors = floors;
	}

	getInfo() {
		console.log(`Площадь: ${this.width * this.length * this.floors }, этажей: ${this.floors}`);
	}
}

export default House;