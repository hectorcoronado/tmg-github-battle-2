import React from 'react'
import PropTypes from 'prop-types'

// import { withHover } from './withHover'
import Hover from './Hover'

const styles = {
    container: {
        display: 'flex',
        position: 'relative'
    },
    tooltip: {
        backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        borderRadius: '.3rem',
        bottom: '100%',
        boxSizing: 'border-box',
        color: '#fff',
        fontSize: '1.4rem',
        left: '50%',
        marginBottom: '.5rem',
        marginLeft: '-8rem',
        padding: '.7rem',
        position: 'absolute',
        textAlign: 'center',
        width: '16rem'
    }
}

// const Tooltip = ({ children, hovering, text }) => {
//     return (
//         <div style={styles.container}>
//             {hovering === true && <div style={styles.tooltip}>{text}</div>}
//             {children}
//         </div>
//     )
// }

export const Tooltip = ({ children, text }) => {
    return (
        <Hover>
            {hovering => (
                <div style={styles.container}>
                    {hovering === true && <div style={styles.tooltip}>{text}</div>}
                    {children}
                </div>
            )}
        </Hover>
    )
}

Tooltip.propTypes = {
    // hovering: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

// export default withHover(Tooltip)