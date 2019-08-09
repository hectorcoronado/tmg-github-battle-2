import React from 'react'

export default class Hover extends React.Component {
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
        return (
            <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.props.children(this.state.hovering)}
            </div>
        )
    }
}