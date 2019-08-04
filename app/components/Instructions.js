import React from 'react'
import { FaFighterJet, FaTrophy, FaUserFriends } from 'react-icons/fa'

export const Instructions = () => {
    return (
        <div className='instructions-container'>
            <h2 className='center-text header-lg'>Instructions</h2>
            <ol className='container-sm grid center-text battle-instructions'>
                <li>
                    <h3 className='header-sm'>Enter two Github users</h3>
                    <FaUserFriends className='bg-light' color='rgb(255, 191, 116)' size={140} />
                </li>
                <li>
                    <h3 className='header-sm'>Battle</h3>
                    <FaFighterJet className='bg-light' color='#727272' size={140} />
                </li>
                <li>
                    <h3 className='header-sm'>See the winners</h3>
                    <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
                </li>
            </ol>
        </div>
    )
}