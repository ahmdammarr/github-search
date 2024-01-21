# GH-Search
[Live demo](https://github-search-two-ivory.vercel.app/)

## Tech

- Next App router
- React
- Graphql
- Github Actions
- Storybook
- Jest


## Setup

- Create [Github Auth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
- generate next_secret - run ```openssl rand -base64 32``` and copy the token to the .env file
- Add the following variables to the `.env` file 

```sh
CLIENT_ID=github app client Id 
CLIENT_SECRET=github app client secret
AUTH_SECRET=next_secret
GRAPHQL_BASEURL=https://api.github.com/graphql
```
- Run ```yarn dev```


## Manual deploy

- Go to actions
- On the left side bar check Vercel Release | manual trigger
- Click Run workflow dropdown
- Choose branch
- Click Run workflow button


## Todo

| Todo List
| ------
| [X] Repo details page 
| [X] Codegen for Graphql (in progress) 
| [X] Auth feature
| [X] Infinite Pagination 
| [ ] Complete test coverage (in progress)
| [ ] Code docs with JSDocs 
| [ ] Document Components with story book


