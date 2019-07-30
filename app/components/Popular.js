import React from 'react'

import LanguagesNav from './LanguagesNav'

import { fetchPopularRepos } from '../utils/api'

export default class Popular extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            error: null,
            repos: null,
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage (selectedLanguage) {
        this.setState({
            error: null,
            repos: null,
            selectedLanguage
        })

        fetchPopularRepos(selectedLanguage)
            .then(repos => this.setState({
                error: null,
                repos
            }))
            // we `catch` the error from fetchPopularRepos here to update our user
            .catch(() => {
                console.warn('error fetching repos: ', error)

                this.setState({
                    error: `there was an error fetching the repos`
                })
            })
    }

    isLoading () {
        return this.state.repos === null & this.state.error === null
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

                {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
            </>
        )
    }
}