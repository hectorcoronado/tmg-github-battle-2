/**
 * `this` can be bound 4 different ways:
 * 
 * 1. implicit binding
 * 2. explicit binding
 * 3. `new` binding
 * 4. window binding
 */

// implicit binding -- "left of the dot" at call time

let me = {
    name: 'hector',
    age: 38,
    sayName: function () {
        console.log(this.name)
    }
}

me.sayName() // hector

let sayNameMixin = function (obj) {
    obj.sayName = function () {
        console.log(this.name)
    }
}

let otherMe = {
    name: 'hector',
    age: 38
}

let you = {
    name: 'yourName',
    age: 40
}

sayNameMixin(otherMe)
sayNameMixin(you)

otherMe.sayName() // hector
you.sayName() // yourName

let Person = function (name, age) {
    return {
        name: name,
        age: age,
        sayName: function () {
            console.log(this.name)
        },
        mother: {
            name: 'Stacey',
            sayName: function () {
                console.log(this.name)
            }
        }
    }
}

let jim = Person('Jim', 42)
jim.sayName() // Jim
jim.mother.sayName() // Stacey