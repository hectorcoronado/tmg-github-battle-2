import React from 'react'

/**
  * this is a higher-order component, which is:
  * 
  * 1. a function that takes in a component, and that
  * 2. returns a new component
  * 
  * in order to pass all necessary props down to the component that we're
  * passing in to `withHover`, we can use the spread operator: `{...this.props}`
  * 
  * we want to pass in a second argument of `hovering` to `withHover` to
  * avoid potential naming collision, which would occur if `Component` we're
  * ultimately rendering already received a `hovering` prop from somewhere else.
  */

export const withHover = (Component, propName = 'hovering') => {
    return class WithHover extends React.Component {
        constructor (props) {
            super(props)
    
            this.state = {
                hovering: false
            }
    
            this.mouseOut = this.mouseOut.bind(this)       
            this.mouseOver = this.mouseOver.bind(this)       
        }
    
        mouseOut () {
            this.setState({
                hovering: true
            })
        }
    
        mouseOver () {
            this.setState({
                hovering: false
            })
        }
    
        render () {
            /**
              * we want to compute the propName getting passed in if it is not the defalt `hovering`,
              * and we want to pass in whatever remaining props our `Component` needs to render:
              */
            const props = {
                [propName]: this.state.hovering,
                ...this.props
            }
            return (
                <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                    <Component {...props} />
                </div>
            )
        }
    }
}