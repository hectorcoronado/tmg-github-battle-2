/**
 * `new` binding
 */

let Animal = function (color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
}

let zebra = new Animal ('black and white', 'zorro', 'zebra')

/**
 * when a function is called with the `new` keyword, JS creates a new
 * object called `this` which delegates to the `Animal`'s prototype on
 * failed lookups -- it's this new object that the interpreter created
 * that the `this` keyword will be referencing
 * 
 * it is as if the `Animal` constructor function were written like:
 * 
 * let Animal = function (color, name, type) {
 *     this = {}
 *     this.color = color;
 *     this.name = name;
 *     this.type = type;
 * }
 */