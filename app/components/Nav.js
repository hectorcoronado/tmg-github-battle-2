import React from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeConsumer } from '../contexts/theme'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export const Nav = () => {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className='row space-between'>
                    <ul className='row nav'>
                        <li>
                            <NavLink
                                activeStyle={activeStyle}
                                exact
                                className='nav-link'
                                to='/'
                            >
                                Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeStyle={activeStyle}
                                className='nav-link'
                                to='/battle'
                            >
                                Battle
                            </NavLink>
                        </li>
                    </ul>
                    <button
                        className={`btn-clear emoji-${theme}`}
                        onClick={toggleTheme}
                        style={{fontSize: '3rem'}}
                    >
                        {theme === 'light' ? '🌙' : '💡'}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}