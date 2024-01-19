"use client";
import { Td, Tr } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export type RESULT_TABLE_PARAMS = {
  id: string;
  repo: string;
  owner: string;
  stars: number;
};

export default function ResultRows({
  repos,
}: {
  repos: RESULT_TABLE_PARAMS[];
}) {
  return (
    <>
      {repos?.map(({ id, repo, owner, stars }) => {
        return (
          <Tr
            key={id}
            _hover={{
              opacity: 0.5,
            }}
            as={Link}
            href={{
              pathname: `/${id}`,
              query: {
                owner,
                name: repo,
              },
            }}
            display={"table-row"}
          >
            <Td>{owner}</Td>
            <Td>{repo}</Td>
            <Td isNumeric>{stars}</Td>
          </Tr>
        );
      })}
    </>
  );
}
