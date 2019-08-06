// this component solves flexport's front end technical screen.

import React from 'react'

const styles = {
    sandbox: {
        border: '1px solid black',
        height: '10rem',
        margin: '0 auto',
        width: '10rem'
    }
}

export default class Sandbox extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            duration: 0
        }

        this.increaseCount = this.increaseCount.bind(this)
        this.resetCount = this.resetCount.bind(this)
        this.stopCount = this.stopCount.bind(this)
    }

    increaseCount () {
        this.interval = window.setInterval(() => {
            this.setState(() => ({
                duration: this.state.duration += 1
            }))
        }, 1)
    }

    stopCount () {
        window.clearInterval(this.interval)
    }

    resetCount () {
        this.setState(() => ({
            duration: 0
        }))
    }

    render () {
        return (
            <>
                <div className='sandbox' onMouseOver={this.increaseCount} onMouseOut={this.stopCount} style={styles.sandbox}>
                    hover over me.

                    <p>{this.state.duration}</p>

                </div>
                <button onClick={this.resetCount}>
                    reset
                </button>
            </>
        )
    }
}