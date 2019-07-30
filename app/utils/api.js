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