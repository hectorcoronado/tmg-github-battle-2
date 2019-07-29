/**
 * explicit binding
 * `call`, `apply`, `bind`
 */

let sayName = function () {
    console.log(`my name is ${this.name}`)
}

let stacey = {
    name: 'stacey',
    age: 42
}

sayName.call(stacey) // my name is stacey

let languages = ['javascript', 'ruby', 'python']

/**
 * `call`'s 1st arg is the context; every subsequent argument gets passed in as per usual
 */

let sayNameAndLanguages = function (lang1, lang2, lang3) {
    console.log(`my name is ${this.name}, and I know ${lang1}, ${lang2}, and ${lang3}`)
}

sayNameAndLanguages.call(stacey, languages[0], languages[1], languages[2])
// my name is stacey and I know javascript, ruby, and python

/**
 * the above is counterintuitive/counterproductive
 * 
 * `apply` does the exact same thing as `call`, except the 2nd argument is an array-like
 *      object specifying the arguments with which the applied function should be called
 */

sayNameAndLanguages.apply(stacey, languages)

/**
 * `bind` is almost the same as `call`, except instead of invoking the function immediately,
 * it returns a *new function*
 */

let newFn = sayName.bind(stacey, languages[0], languages[1], languages[2])