export const getRepo = `
  query getRepo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      isPrivate
      homepageUrl
      forks {
        totalCount
      }
      stargazers {
        totalCount
      }
      owner {
        login
      }
    }
  }
`;
