# GH-Search

## Tech

- Next App router
-  React
- Github Actions
- Storybook
- Jest


## Setup

- Create [Github Auth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
- Add the following variables to the `.env` file // To be updated after auth feature

```sh
graphql_base_url=
access_token= (To be removed after auth feature)
```

## Manual deploy

- Go to actions
- On the left side bar check Vercel Release | manual trigger
- Click Run workflow dropdown
- Choose branch
- Click Run workflow button


| Todo by 21st of Jan
| ------
| [X] Repo details page 
| [ ] Codegen for Graphql (in progress) 
| [ ] Auth feature
| [ ] Complete test coverage
| [ ] Code docs with JSDocs 
| [ ] Document Components with story book


