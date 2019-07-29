import React from 'react'

const LanguagesNav = ({ selected, onUpdateLanguage }) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
        <ul className='flex-center'>
        {languages.map((language) => (
            <li key={language}>
                <button
                    className='btn-clear nav-link'
                    onClick={() => onUpdateLanguage(language)}
                    style={language === selected ? { color: 'rgb(187, 46, 31'} : null}>
                        {language}
                </button>
            </li>
        )
        )}
        </ul>
    )
}

export default LanguagesNav