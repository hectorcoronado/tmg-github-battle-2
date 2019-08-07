import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    container: {
        display: 'flex',
        position: 'relative'
    },
    tooltip: {
        backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        borderRadius: '.3rem',
        bottom: '100%',
        boxSizing: 'border-box',
        color: '#fff',
        fontSize: '1.4rem',
        left: '50%',
        marginBottom: '.5rem',
        marginLeft: '-8rem',
        padding: '.7rem',
        position: 'absolute',
        textAlign: 'center',
        width: '16rem'
    }
}

export default class Tooltip extends React.Component {
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
        const { children, text } = this.props
        const { hovering } = this.state

        return (
            <div 
                onMouseOut={this.mouseOut}
                onMouseOver={this.mouseOver}
                style={styles.container}
            >
                {hovering === true && <div style={styles.tooltip}>{text}</div>}
                {children}
            </div>
        )
    }
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired
}