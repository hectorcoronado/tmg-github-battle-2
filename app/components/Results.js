import queryString from 'query-string'
import React from 'react'
import { Link } from 'react-router-dom'

import { battle } from '../utils/api'
import { Card } from './Card'
import Loading from './Loading'
import { ProfileList } from './ProfileList'

export default class Results extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            error: null,
            loading: true,
            loser: null,
            winner: null
        }
    }

    componentDidMount () {
        const { playerOne, playerTwo } = queryString.parse(this.props.location.search)

        battle([ playerOne, playerTwo ])
            .then(players => {
                this.setState({
                    error: null,
                    loading: false,
                    loser: players[1],
                    winner: players[0]
                })
            }).catch(({ message }) => {
                this.setState({
                    error: message,
                    loading: false
                })
            })
    }

    render () {
        const { error, loading, loser, winner } = this.state

        if (loading) {
            return <Loading />
        }

        if (error) {
            return (
                <p className='center-text error'>{error}</p>
            )
        }

        return (
            <React.Fragment>
                <div className='grid space-around container-sm'>
                    <Card
                        avatar={winner.profile.avatar_url}
                        header={winner.score === loser.score ? 'Tie' : 'Winner'}
                        href={winner.profile.html_url}
                        name={winner.profile.login}
                        subheader={`Score: ${winner.score.toLocaleString()}`}
                    >
                        <ProfileList profile={winner.profile} />
                    </Card>
                    <Card
                        avatar={loser.profile.avatar_url}
                        header={winner.score === loser.score ? 'Tie' : 'Loser'}
                        href={loser.profile.html_url}
                        name={loser.profile.login}
                        subheader={`Score: ${loser.score.toLocaleString()}`}
                    >
                        <ProfileList profile={loser.profile} />
                    </Card>
                </div>
                <Link
                    className='btn dark-btn btn-space'
                    to='/battle'
                >
                    Reset
                </Link>
            </React.Fragment>
        )
    }
}