import PropTypes from 'prop-types'
import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

import { ThemeConsumer } from '../contexts/theme'

export const PlayerPreview = ({ label, onReset, username}) => {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className='column player'>
                    <h3 className='player-label'>{label}</h3>
                    <div className={`row bg-${theme}`}>
                        <div className='player-info'>
                            <img
                                alt={`Avatar for ${username}`}
                                className='avatar-small'
                                src={`https://github.com/${username}.png?size=200`}
                            />
                            <a
                                className='link'
                                href={`https://github.com/${username}`}
                            >
                                {username}
                            </a>
                            <button
                                className='btn-clear flex-center'
                                onClick={onReset}    
                            >
                                <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ThemeConsumer>
    )
}

PlayerPreview.propTypes = {
    label: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}