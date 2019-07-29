/**
 * window binding
 */

let sayAge = function () {
    console.log(this.age)
}

let me = {
    age: 70
}

sayAge() // undefined

/**
 * the above is undefined because by default, `this`
 * references the `window` object
 * 
 * however, in `strict mode`, by default `this` will
 * just be undefined
 */