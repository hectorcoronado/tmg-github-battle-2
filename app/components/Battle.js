import React from 'react'

import Instructions from './Instructions'
import PlayerInput from './PlayerInput'

export default class Battle extends React.Component {
    render () {
        return (
            <>
                <Instructions />
                <PlayerInput
                    label='label!'
                    onSubmit={(value) => console.log('value:', value) }
                />
            </>
        )
    }
}