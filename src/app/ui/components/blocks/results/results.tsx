import { getQuery } from "@app/utils/api-config/get-query";
import {
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import ResultRows, { RESULT_TABLE_PARAMS } from "./result-rows";

export default async function Results({ query }: { query: string }) {
  const result = await getQuery({
    url: "https://api.github.com/graphql",
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
                    name
                    stargazers{
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
    variables: { search: query },
  });
  const edges = result?.data?.search?.edges;
  const rows = edges?.map((node: typeof edges.node) => {
    return {
      repo: node?.node?.name || "",
      stars: node?.node?.stargazers?.totalCount || "",
      owner: node?.node?.owner?.login || "",
    };
  });
  return (
    <TableContainer w="100%" mt="lg" overflowY={'scroll'}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Owner</Th>
            <Th>Repo</Th>
            <Th isNumeric>Stars</Th>
          </Tr>
        </Thead>
        <Tbody>
          <ResultRows repos={rows as RESULT_TABLE_PARAMS[]} />
        </Tbody>
        <Tfoot>
          {/* 
          TODO: To be implemented with pagination
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr> */}
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
