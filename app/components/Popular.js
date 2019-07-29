import React from 'react'

import LanguagesNav from './LanguagesNav'

export default class Popular extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }

    render () {
        const { selectedLanguage } = this.state

        return (
            <>
                <LanguagesNav
                    onUpdateLanguage={this.updateLanguage}
                    selected={selectedLanguage}
                />
            </>
        )
    }
}