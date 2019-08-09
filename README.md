# tmg-github-battle-2
===

## component lifecycle

the component lifecycle can be thought of (rougly speaking) as comprised of three stages, when the component:

1. gets added to the DOM (mounting)
    - set the component's initial state, `constructor`
    - render a DOM node, `render`, a pure function
    - make ajax req's, `componentDidMount`, which only gets called one time when the component is first mounted to the DOM
    - set up listeners (e.g. via websockets or firebase), `componentDidMount`

2. updates its state or receives new data via props (updating)
    - re-render the ui with updated state/props, `render`/`setState`
    - re-fetching data, `componentDidUpdate`, invoked after component's local state or props change, but *not invoked* on initial render
    - re-setting a listener, `componentDidUpdate`

3. gets removed from the DOM (unmounting)
    - cleanup, remove listeners, etc, `componentWillUnmount`, invoked when the component is about to be removed from the DOM

```javascript
class App extends React.Component {
    constructor(props) {
        // establish initial state of a component
        super(props)

        this.state = {}
    }

    componentDidMount() {
        // invoked once the component is mounted to the DOM
        // good for e.g. making ajax req's
    }

    componentDidUpdate() {
        // invoked immediately after updating occurs
        // good for ajax req's based on changing props or DOM operations
    }

    componentWillUnmount() {
        // called right before a component is unmounted from the DOM
        // good for cleaning up listeners
    }

    render() {
        // pure function that renders ui
    }
}
```

The chart found in the link below can help visualize the timeline in which these methods are invoked:

https://twitter.com/dan_abramov/status/981712092611989509

## context

From the React docs:

> Context provides a way to pass data through the component
> tree without having to pass props down manually at every
> level.

Typically, you create a new `Context` for each unique piece of data that needs to be available throughout your component tree.

```javascript
const ExampleContext = React.createContext()
```

... and this `ExampleContext` will have two properties in it by default, both of which are React Components:

```javascript
ExampleContext.Provider
ExampleContext.Consumer
```

`.Provider` allows us to declare the data that we want available throughout our component tree

`.Consumer` allows any component in the component tree that needs that data to be able to subscribe to it

We can define our context simply:
```javascript
// ExampleContext.js
import React from 'react'

const ExampleContext = React.createContext()

export default ExampleContext
```

We can then assign some value to it:
```javascript
// index.js
import React from 'react'
import ExampleContext from './ExampleContext'
import SomeComponent from './SomeComponent'

class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            example: 'initial-value',
            toggleExample: () => {
                this.setState(({ example }) => ({
                    example: example === 'initial-value' ? 'another-value' : 'initial-value'
                }))
            }
        }
    }

    render () {
        return (
            <ExampleContext.Provider value={this.state}>
                <SomeComponent />
            </ExampleComponent.Provider>
        )
    }
}

export default App
```

And then we can use it elsewhere:
```javascript
// Blog.js
import React from 'react'
import ExampleContext from './ExampleContext'

export const Blog = () => {
    return (
        <ExampleContext.Consumer>
            {({ example, toggleExample }) => (
                <React.Fragment>
                    <Nav toggleExample={toggleExample} />
                    <Posts example={example} />
                </React.Fragment>
            )}
        </ExampleContext.Consumer>
    )
}
```

`defaultValue`

Whenever you render a Consumer component, it's going to get its value from the `value` prop of the nearest Provider component of the same context object.

However, if there is no parent provider of the same context object in the component tree, it would get its value from the first argument that was passed to `createContext` when the context was created.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const ExpletiveContext = React.createContext('shit') // <- default value is `shit`

function ContextualExclamation () {
    return (
        <ExpletiveContext.Consumer>
            {word => <span>Oh {word}!</span>}
        </ExpletiveContext.Consumer>
    )
}

function VisitGrandmasHouse () {
    return (
        // override default value for grandma's house
        <ExpletiveContext.Provider value='darn'>
            <h1>grandma's house</h1>
            <ContextualExclamation />
        </ExpletiveContext.Provider>
    )
}

function VisitFriendsHouse () {
    return (
        // use default expletive when we're with friends
        <React.Fragment>
            <h1>friend's house</h1>
            <ContextualExclamation />
        </React.Fragment>
    )
}

function App () {
    return (
        <React.Fragment>
            <VisitFriendsHouse />
            <VisitGrandmasHouse />
        </React.Fragment>
    )
}
```