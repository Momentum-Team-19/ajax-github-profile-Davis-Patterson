const gitHubProfile = document.querySelector('#gitHubProfile')

fetch('https://api.github.com/users/davis-patterson',{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json()
})

.then((data) => {
    console.log(data)
    //header
    let heaDer = document.createElement('header')
    //image 
    let imgDiv = document.createElement('img')
    imgDiv.src = data.avatar_url
    heaDer.appendChild(imgDiv)
    //name
    let nameDiv = document.createElement('h1')
    nameDiv.innerText = data.name
    heaDer.appendChild(nameDiv)
    //append to gitHubProfile
    gitHubProfile.appendChild(heaDer)
    //container
    let infoContainer = document.createElement('div')
    infoContainer.classList.add('container')
    //location
    let locationDiv = document.createElement('h3')
    locationDiv.innerText = `Location: ${data.location}`
    infoContainer.appendChild(locationDiv)
    //github url
    let urlDiv = document.createElement('h3')
    let textPrefix = 'GitHub URL: '
    let linkText = document.createTextNode('Davis-Patterson')
    let link = document.createElement('a')
    link.href = data.html_url
    link.appendChild(linkText)
    let combinedText = document.createTextNode(`${textPrefix} `)
    urlDiv.appendChild(combinedText)
    urlDiv.appendChild(link)
    infoContainer.appendChild(urlDiv)
    //github username 
    let usernameDiv = document.createElement('h3')
    usernameDiv.innerText = `GitHub username: ${data.login}`
    infoContainer.appendChild(usernameDiv)
    //append to gitHubProfile
    gitHubProfile.appendChild(infoContainer)
    //repo div
    let repoDiv = document.createElement('h2')
    repoDiv.classList.add('container2')
    repoDiv.innerText = 'GitHub Repos'
    gitHubProfile.appendChild(repoDiv)
    //fetch repos

    }
)

fetch('https://api.github.com/users/Davis-Patterson/repos',{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
    .then((response) => {
        return response.json()
})

.then((repos) => {
    console.log(repos)
    //create repo container
    let repoContainer = document.createElement('div')
    repoContainer.classList.add('container')
    //building repos
    for (let repo of repos) {
        let singleListRepo = document.createElement("h3");
        singleListRepo.classList.add('repoList')
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.textContent = repo.name;
        //github icon svg
        const iconSvg = 
            `<svg height="16" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.22C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.91 11.94 2.63 11.75C2.34 11.56 1.82 10.97 2.47 10.96C3.1 10.94 3.57 11.55 3.73 11.77C4.43 13 5.57 12.62 6.04 12.4C6.11 12.06 6.3 11.85 6.51 11.71C4.44 11.5 2.84 10.69 2.84 7.76C2.84 6.86 3.13 6.16 3.58 5.66C3.51 5.46 3.24 4.65 3.7 3.49C3.7 3.49 4.34 3.27 6.02 4.39C6.67 4.2 7.33 4.1 8 4.1C8.67 4.1 9.33 4.2 9.98 4.39C11.66 3.27 12.3 3.49 12.3 3.49C12.76 4.65 12.49 5.46 12.42 5.66C12.87 6.16 13.16 6.86 13.16 7.76C13.16 10.7 11.56 11.5 9.49 11.71C9.74 11.86 9.93 12.18 9.93 12.53C9.93 13.21 9.92 14.02 9.92 14.22C9.92 14.42 10.07 14.66 10.47 14.59C13.71 13.53 16 10.54 16 8C16 3.58 12.42 0 8 0Z"></path>
            </svg>`;
        singleListRepo.innerHTML = iconSvg
        singleListRepo.appendChild(link)
        //append children
        repoContainer.appendChild(singleListRepo);
    }
    gitHubProfile.appendChild(repoContainer);
})