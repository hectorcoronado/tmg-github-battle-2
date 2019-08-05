import React from 'react'

import { Instructions } from './Instructions'
import PlayerInput from './PlayerInput'
import { PlayerPreview } from './PlayerPreview';
import Results from './Results'
import { FaLess } from 'react-icons/fa';

export default class Battle extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            battle: false,
            playerOne: null,
            playerTwo: null
        }

        this.handleReset = this.handleReset.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleReset (id) {
        this.setState({
            [id]: null
        })
    }

    handleSubmit (id, player) {
        this.setState({
            [id]: player
        })
    }

    render () {
        const { battle, playerOne, playerTwo } = this.state

        if (battle) {
            return <Results playerOne={playerOne} playerTwo={playerTwo} />
        }

        return (
            <React.Fragment>
                <Instructions />
                <div className='players-container'>
                    <h1 className='center-text header-lg'>Players</h1>
                    <div className='row space-around'>
                        {playerOne === null
                            ? (
                                <PlayerInput
                                    label='Player One'
                                    onSubmit={player => this.handleSubmit('playerOne', player)}
                                />
                            )
                            : (
                                <PlayerPreview
                                    label='Player One'
                                    onReset={() => this.handleReset('playerOne')}
                                    username={playerOne}
                                />
                            )
                        }
                        {playerTwo === null
                            ? (
                                <PlayerInput
                                    label='Player Two'
                                    onSubmit={player => this.handleSubmit('playerTwo', player)}
                                />
                            )
                            : (
                                <PlayerPreview
                                    label='PlayerTwo'
                                    onReset={() => this.handleReset('playerTwo')}
                                    username={playerTwo}
                                />
                            )
                        }
                    </div>

                    {playerOne && playerTwo && (
                        <button
                            className='btn dark-btn btn-space'
                            onClick={() => this.setState({ battle: true })}
                        >
                            Battle
                        </button>
                    )}

                </div>
            </React.Fragment>
        )
    }
}