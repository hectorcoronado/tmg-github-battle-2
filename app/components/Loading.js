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
    state = { content: this.props.text }

    static propTypes = {
        speed: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }

    static defaultProps = {
        speed: 300,
        text: 'Loading'
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