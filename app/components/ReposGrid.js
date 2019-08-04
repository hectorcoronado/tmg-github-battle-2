import React from 'react'
import PropTypes from 'prop-types'
import { FaCodeBranch, FaExclamationTriangle, FaStar, FaUser } from 'react-icons/fa'

export const ReposGrid = ({ repos }) => {
    return (
        <ul className='grid space-around'>
            {repos.map((repo, index) => {
                const {
                    forks,
                    html_url,
                    name,
                    open_issues,
                    owner,
                    stargazers_count
                } = repo
                const { avatar_url, login } = owner

                return (
                    <li key={html_url} className='repo bg-light'>
                        <h4 className='header-lg center-text'>#{index + 1}</h4>
                        <img
                            alt={`Avatar for ${login}`}
                            className='avatar'
                            src={avatar_url}
                        />
                        <h2 className='center-text'>
                            <a className='link' href={html_url}>{login}</a>
                        </h2>
                        <ul className='card-list'>
                            <li>
                                <FaUser color='rgb(255, 191, 116' size={22} />
                                <a href={`https://github.com/${login}`}>{login}</a>
                            </li>
                            <li>
                                <FaStar color='rgb(255, 215, 0' size={22} />
                                {stargazers_count.toLocaleString()} stars 
                            </li>
                            <li>
                                <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                                {forks.toLocaleString()} forks
                            </li>
                            <li>
                                <FaExclamationTriangle color='rgb(241, 138, 147' size={22} />
                                {open_issues.toLocaleString()} open issues
                            </li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired
}