# higher order functions

In JS, functions are 'first-class objects.' What that means is that just like objects, arrays, and strings can be assigned to a variable, passed as an argument to a function, or returned from a function, so too can other functions be used in those ways.

```javascript
const add = (x, y) => x + y

const addFive = (x, addReference) => addReference(x, 5)

addFive(10, add) // 15
```

In the above, we pass the `add` function as an argument to the `addFive` function, renaming it `addReference`, and then we invoke it.

The function passed in as an argument is, as usual, called a `callback`; the function we're passing the *callback* function to is the `higher-order function`. Re-written with this terminology, we have the following:

```javascript
const add = (x, y) => x + y

const higherOrderFunction = (x, callback) => callback(x, 5)

higherOrderFunction(10, add) // 15
```

We can also make the above far more reusable by creating a more generic `makeAdder` function, which can take in a number and a reference to the original `add` function, but returns a new function that accepts the number to add:

```javascript
const add = (x, y) => x + y

const makeAdder = (x, addReference) => {
    return y => addReference(x, y)
}

const addFive = makeAdder(5, add)
const addTen = makeAdder(10, add)
const addTwenty = makeAdder(20, add)
```

We can say the following: our higher-order function

1. is a function
2. takes in a callback function as an argument
3. returns a new function
4. the function it returns can invoke the original callback function we passed in

```javascript
const higherOrderFunction = callback => {
    return () => {
        return callback()
    }
}
```

And we can say something similar about higher-order components in React; a higher-order component:

1. is a component
2. takes in a component as an argument
3. returns a new component
4. the component it returns can render the original component that was passed in

```javascript
const higherOrderComponent = Component => {
    return class HigherOrderComponent extends React.Component {
        render () {
            return <Component />
        }
    }
}
```

A more realistic example that adds `hovering` state to a given component:

```javascript
const withHover = (Component, propName = 'hovering') => {
    return class WithHover extends React.Component {
        constructor (super) {
            super(props)

            this.state = {
                hovering: false
            }

            this.mouseOut = this.mouseOut.bind(this)
            this.mouseOver = this.mouseOver.bind(this)
        }

        mouseOut () {
            this.setState({ hovering: false })
        }

        mouseOver () {
            this.setState({ hovering: true })
        }

        render () {
            const props = {
                [propName]: this.state.hovering,
                ...this.props
            }

            return (
                <div
                    onMouseOut={this.mouseOut}
                    onMouseOver={this.mouseOver}
                >
                    <Component {...props} />
                </div>
            )
        }
    }
}
```

From the React docs:

> a component transforms props into UI,
> a higher-order component transforms a component into another component