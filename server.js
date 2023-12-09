const express = require('express')
require('dotenv').config()
const app = express()
// import data from './githubData.json'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const data = 
  {
    "login": "Ruler45",
    "id": 136236694,
    "node_id": "U_kgDOCB7Olg",
    "avatar_url": "https://avatars.githubusercontent.com/u/136236694?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ruler45",
    "html_url": "https://github.com/Ruler45",
    "followers_url": "https://api.github.com/users/Ruler45/followers",
    "following_url": "https://api.github.com/users/Ruler45/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ruler45/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ruler45/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ruler45/subscriptions",
    "organizations_url": "https://api.github.com/users/Ruler45/orgs",
    "repos_url": "https://api.github.com/users/Ruler45/repos",
    "events_url": "https://api.github.com/users/Ruler45/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ruler45/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sahin Alam",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2023-06-11T10:42:13Z",
    "updated_at": "2023-12-08T16:03:28Z"
  }


app.get('/socials', (req, res) => {
  res.send({
    website: "https://sahin-alam-portfolio.netlify.app",
    github: "https://github.com/Ruler45"
  })
})

app.get('/github', (req, res) => {
  res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})