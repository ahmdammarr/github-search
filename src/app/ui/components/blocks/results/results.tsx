import { getQuery } from "@app/utils/api-config/get-query";
import React from "react";
import ResultTable, { RESULT_TABLE_PARAMS } from "./result-table";

const getData = async (query: string, cursor?: string) => {
  const queryData = await getQuery({
    url: process.env.graphql_base_url || "",
    query: `
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
        `,
    variables: { search: query, after: cursor },
  });

  return { data: queryData };
};

export default async function Results({
  query,
  cursor,
}: {
  query: string;
  cursor?: string;
}) {
  const result = (await getData(query, cursor)).data;
  const edges = result?.data?.search?.edges;
  const newCursor = result?.data?.search?.pageInfo?.endCursor;
  const rows = edges?.map((node: typeof edges.node) => {
    return {
      id: node?.node?.id || "",
      repo: node?.node?.name || "",
      stars: node?.node?.stargazers?.totalCount || "",
      owner: node?.node?.owner?.login || "",
    };
  });
  return (
    <ResultTable
      repos={rows as RESULT_TABLE_PARAMS[]}
      cursor={newCursor}
    />
  );
}
