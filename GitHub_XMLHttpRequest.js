const [GH_ID, GH_KEY] = ['MDQ6VXNlcjc0MDY1OTQ5', '']

function promisify(fn) {
    return (...args) => new Promise((resolve, reject) => {
        args.push(function callback(error, result) {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
        fn.apply(this, args)
    })
}

function getJSON(url, callback) {
    const request = new XMLHttpRequest()

    request.onload = function () {
        let error = this.status !== 200
        if (!error) {
            const data = JSON.parse(this.response)
            callback(error, data)
        } else {
            throw new Error(this.response)
        }
    }

    request.open('GET', `${url}?client_id{GH_ID}&client_secret=${GH_KEY}`)
    request.send()

    return request
}

const GH_NICK = 'VitoZMX'
const url = `https://api.github.com/users/${GH_NICK}`

const app = document.querySelector('#gh-profile')

const getJSONpromisified = promisify(getJSON)


async function render() {
    let data = await getJSONpromisified(url)
    if (data.repos_url) {
        let reposData = await getJSONpromisified(data.repos_url)
        console.log(reposData)
        data.repos = reposData
    }

    app.innerHTML = view(data)
}

render()

function view(user) {
    let html = `<h1>Hello, I am ${user.name}!</h1>`

    if (user.company) {
        html += `<p>I currently work at <strong>${user.company}</strong></p>`
    }

    const profile_link = `<a href='${user.html_url}'>GitHub Profile</a>`

    if (user.public_repos) {
        html += `<p>You can find ${user.public_repos} public repos on my ${profile_link}</p>`
    } else {
        html += `<p>There nithing to see on my ${profile_link}</p>`
    }

    if (user.avatar_url) {
        html += `<img width='200px' src="${user.avatar_url}"/>`
    }

    if (user.repos) {
        html += `<ul>`
        for (let repo in user.repos) {
            repo = user.repos[repo]
            const link = ` <a target="_blank" href="${repo.url}">${repo.name}</a>`
            let langs
            if (repo.languages) {
                langs = `${repo.languages.join(', ')}`
            }
            html += `<li>${link} - ${repo.description} ${langs ? `<br>Write in: <b><i>${langs}</i></b>` : ''}</li>`
        }
        html += `</ul>`
    }
    return html
}