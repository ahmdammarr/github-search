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
- Add the following variables to the `.env` file // To be updated after auth feature

```sh
CLIENT_ID=
CLIENT_SECRET=
AUTH_SECRET=
GRAPHQL_BASEURL=
```
- Run ```yarn dev```


## Manual deploy

- Go to actions
- On the left side bar check Vercel Release | manual trigger
- Click Run workflow dropdown
- Choose branch
- Click Run workflow button


## Todo
| Todo by 21st of Jan
| ------
| [X] Repo details page 
| [X] Codegen for Graphql (in progress) 
| [X] Auth feature
| [ ] Complete test coverage (in progress)
| [ ] Code docs with JSDocs 
| [ ] Document Components with story book


