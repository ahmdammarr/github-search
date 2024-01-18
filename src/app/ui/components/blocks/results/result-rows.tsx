"use client";
import { Td, Tr } from "@chakra-ui/react";
import React from "react";

export type RESULT_TABLE_PARAMS = {
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
      {repos?.map(({ repo, owner, stars }) => {
        return (
          <Tr key={repo}>
            <Td>{owner}</Td>
            <Td>{repo}</Td>
            <Td isNumeric>{stars}</Td>
          </Tr>
        );
      })}
    </>
  );
}
