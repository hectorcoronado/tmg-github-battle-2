import React from 'react'
import PropTypes from 'prop-types'
import { FaCodeBranch, FaExclamationTriangle, FaStar, FaUser } from 'react-icons/fa'

import { Card } from './Card'
import { Tooltip } from './Tooltip'

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
                    <li key={html_url}>
                        <Card
                            avatar={avatar_url}
                            header={`#${index + 1}`}
                            href={html_url}
                            name={login}
                        >
                            <ul className='card-list'>
                                <li>
                                    <Tooltip text='Github username'>
                                        <FaUser color='rgb(255, 191, 116' size={22} />
                                        <a href={`https://github.com/${login}`}>{login}</a>
                                    </Tooltip>
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
                        </Card>
                    </li>
                )
            })}
        </ul>
    )
}

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired
}