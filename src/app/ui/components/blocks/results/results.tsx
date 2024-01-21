import { getQuery } from "@app/utils/api-config/get-query";
import React from "react";
import ResultTable, { RESULT_TABLE_PARAMS } from "./result-table";
import { searchRepos } from "./queries/searchRepos";
import { Query } from "@app/graphql/types/graphql";

const getData = async (query: string, cursor?: string) => {
  const queryData: { data: Query } = await getQuery({
    url: process.env.graphql_base_url || "",
    query: `${searchRepos}`,
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
  const endCursor = result?.data?.search?.pageInfo?.endCursor;
  const rows = edges?.map(({ node }) => {
    return {
      id: node?.id || "",
      repo: node?.name || "",
      stars: node?.stargazers?.totalCount || "",
      owner: node?.owner?.login || "",
    };
  });
  return (
    <ResultTable repos={rows as RESULT_TABLE_PARAMS[]} cursor={endCursor} />
  );
}
