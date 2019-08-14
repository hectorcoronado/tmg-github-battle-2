import React from 'react'
import { Link } from 'react-router-dom'

import { Instructions } from './Instructions'
import PlayerInput from './PlayerInput'
import { PlayerPreview } from './PlayerPreview';
import Results from './Results'
import { FaLess } from 'react-icons/fa';

export default class Battle extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
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
        const { playerOne, playerTwo } = this.state

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
                        <Link
                            className='btn dark-btn btn-space'
                            to={{
                                pathname: '/battle/results',
                                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                            }}
                        >
                            Battle
                        </Link>
                    )}

                </div>
            </React.Fragment>
        )
    }
}