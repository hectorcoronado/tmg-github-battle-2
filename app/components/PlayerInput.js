import React from 'react'
import PropTypes from 'prop-types'

import { ThemeConsumer } from '../contexts/theme'

export default class PlayerInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault()

        this.props.onSubmit(this.state.username)
    }

    render () {
        return (
            <ThemeConsumer>
                {({ theme }) => (
                    <form className='column player' onSubmit={this.handleSubmit}>
                        <label className='player-label' htmlFor='username'>
                            {this.props.label}
                        </label>
                        <div className='row player-inputs'>
                            <input
                                autoComplete='off'
                                className={`input-${theme}`}
                                id='username'
                                onChange={this.handleChange}
                                placeholder='github username'
                                type='text'
                                value={this.state.username}
                            />
                            <button
                                className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                                disabled={!this.state.username}
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </ThemeConsumer>
        )
    }
}

PlayerInput.propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}