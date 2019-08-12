import React from 'react'
import PropTypes from 'prop-types'

import { ThemeConsumer } from '../contexts/theme'

export const Card = ({ avatar, children, header, href, name, subheader }) => {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className={`card bg-${theme}`}>
                    <h4 className='header-lg center-text'>
                        {header}
                    </h4>
                    <img
                        alt={`Avatar for ${name}`}
                        className='avatar'
                        src={avatar}
                    />
                    {subheader && (
                        <h4 className='center-text'>
                            {subheader}
                        </h4>
                    )}
                    <h2 className='center-text'>
                        <a className='link' href={href}>
                            {name}
                        </a>
                    </h2>
                    {children}
                </div>
            )}
        </ThemeConsumer>
    )
}

Card.propTypes = {
    avatar: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subheader: PropTypes.string,
}