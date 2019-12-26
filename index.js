// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
 
  set phrase(phrase) {
    this._phrase = phrase;
  }
 
  get speak() {
    return `${this.name} says ${this._phrase || 'squawk'}`;
  }
}
 