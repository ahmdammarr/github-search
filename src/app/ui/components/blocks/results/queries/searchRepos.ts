export const searchRepos = `
query SearchQuery($search: String!, $after: String){
  search(query:$search, type: REPOSITORY, first: 100, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        ... on Repository {
          id
          name
          stargazers {
            totalCount
          }
          owner {
            login
          }
        }
      }
    }
  }
}
`;
