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


