
const id = 'YOUR_CLIENT_ID'
const sec = 'YOUR_SECRET_ID'
const params = `?cliend_id=${id}&client_secret=${sec}`

export const battle = players => {
    return Promise.all([
        getUserData(players[0]),
        getUserData(players[1])
    ]).then(results => sortPlayers(results))
}

const calculateScore = (followers, repos) => {
    return (followers * 3) + getStarCount(repos)
}

export const fetchPopularRepos = language => {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
        // turn our response into valid json
        .then(res => res.json())
        .then(data => {
            // handle error/missing data (rate limiting can cause this).
            // we're not catching the error here because we can't do
            // anything with it from the user's perspective
            if (!data.items) {
                throw new Error(data.messages)
            }

            return data.items
        })
}

const getErrorMsg = (message, username) => {
    if (message === 'Not Found') {
        return `${username} doesn't exist.`
    }

    return message
}

const getProfile = username => {
    return fetch(`https://api.github.com/users/${username}${params}`)
        .then(res => res.json())
        .then(profile => {
            // if there is an error coming back from the api, the returned
            // profile will have a `message` property detailing it:
            if (profile.message) {
                // in our UI layer, when we invoke `getProfile`, we want to let
                // users know what the error was, so we throw an error
                throw new Error(getErrorMsg(profile.message, username))
            }

            return profile
        })
}

const getRepos = username => {
    return fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
        .then(res => res.json())
        .then(repos => {
            // as above, if there is an error, the response will contain a `message` property:
            if (repos.message) {
                throw new Error(getErrorMsg(repos.message, username))
            }

            return repos
        })
}

const getStarCount = repos => {
    return repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0)
}

const getUserData = player => {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(([ profile, repos ]) => ({
        profile,
        score: calculateScore(profile.followers, repos)
    }))
}

const sortPlayers = players => {
    return players.sort((a, b) => b.score - a.score)
}