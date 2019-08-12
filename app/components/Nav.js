import React from 'react'

import { ThemeConsumer } from '../contexts/theme'

export const Nav = () => {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className='row space-between'>
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