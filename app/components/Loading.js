import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    content: {
        fontSize: '3.5rem',
        left: 0,
        marginTop: '2rem',
        position: 'absolute',
        right: 0,
        textAlign: 'center'
    }
}

export default class Loading extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            content: props.text
        }
    }

    componentDidMount () {
        const { speed, text } = this.props

        // assign `setInterval` to `this.interval` so as to clear when component unmounts
        this.interval = window.setInterval(() => {
            this.state.content === `${text}...`
                ? this.setState({ content: `${text}` })
                : this.setState(({ content }) => ({ content: content + '.' }))
        }, speed)
    }

    componentWillUnmount () {
        window.clearInterval(this.interval)
    }

    render () {
        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        )
    }
}

Loading.propTypes = {
    speed: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

Loading.defaultProps = {
    speed: 300,
    text: 'Loading'
}