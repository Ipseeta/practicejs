function makeClass () {
    class Vegetable{
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = new makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);