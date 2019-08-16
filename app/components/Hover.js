import React from 'react'

export default class Hover extends React.Component {
    state = { hovering: false }

    mouseOut = () => this.setState({ hovering: true })

    mouseOver = () => this.setState({ hovering: false })

    render () {
        return (
            <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.props.children(this.state.hovering)}
            </div>
        )
    }
}