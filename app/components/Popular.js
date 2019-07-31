import React from 'react'

import LanguagesNav from './LanguagesNav'

import { fetchPopularRepos } from '../utils/api'

export default class Popular extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            error: null,
            repos: {

            },
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        // when the component first mounts, fetch repos w/default option 'all'
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage (selectedLanguage) {
        this.setState({
            error: null,
            selectedLanguage
        })

        // if we have not yet fetched repos for a specific language, make request
        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then(data => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data
                        }
                    }))
                })
                // we `catch` the error from fetchPopularRepos here to update our user
                .catch(() => {
                    console.warn('error fetching repos: ', error)
    
                    this.setState({
                        error: `there was an error fetching the repos`
                    })
                })
        }

    }

    isLoading () {
        const { error, repos, selectedLanguage } = this.state

        // our app is loading if:
        // 1. we have no repos for specific language, and
        // 2. we do not have any error message
        return !repos[selectedLanguage] && error === null
    }

    render () {
        const { error, repos, selectedLanguage } = this.state

        return (
            <>
                <LanguagesNav
                    onUpdateLanguage={this.updateLanguage}
                    selected={selectedLanguage}
                />

                {this.isLoading() && <p>loading...</p>}

                {error && <p>{error}</p>}

                {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>}
            </>
        )
    }
}