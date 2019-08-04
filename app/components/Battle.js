import React from 'react'

import Instructions from './Instructions'
import PlayerInput from './PlayerInput'

export default class Battle extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            playerOne: null,
            playerTwo: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (id, player) {
        this.setState({
            [id]: player
        })
    }

    render () {
        const { playerOne, playerTwo } = this.state
        return (
            <React.Fragment>
                <Instructions />
                <div className='players-container'>
                    <h1 className='center-text header-lg'>Players</h1>
                    <div className='row space-around'>
                        {playerOne === null && (
                            <PlayerInput
                                label='Player One'
                                onSubmit={player => this.handleSubmit('playerOne', player)}
                            />
                        )}
                        {playerTwo === null && (
                            <PlayerInput
                                label='Player Two'
                                onSubmit={player => this.handleSubmit('playerTwo', player)}
                            />
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}