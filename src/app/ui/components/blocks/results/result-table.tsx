"use client";
import {
  Flex,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type RESULT_TABLE_PARAMS = {
  id: string;
  repo: string;
  owner: string;
  stars: number;
};

export default function ResultTable({
  repos,
  cursor,
}: {
  repos: RESULT_TABLE_PARAMS[];
  cursor?: string;
}) {
  const { replace } = useRouter();
  const [data, setdata] = useState(repos);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setdata([...data, ...repos]);
    setisLoading(false);
  }, [cursor]);

  const searchParams = useSearchParams();
  const pathname = usePathname();

  function handlePagination(newCursor?: string) {
    setisLoading(true);
    const params = new URLSearchParams(searchParams);
    if (newCursor) params.set("cursor", newCursor);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <TableContainer
        w="100%"
        mt="lg"
        overflowY={"scroll"}
        onScroll={(event) => {
          const isScrollEndReached =
            event?.currentTarget.scrollTop +
              event?.currentTarget.clientHeight ===
            event?.currentTarget.scrollHeight;

          if (isScrollEndReached) handlePagination(cursor);
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Owner</Th>
              <Th>Repo</Th>
              <Th isNumeric>Stars</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map(({ id, repo, owner, stars }) => {
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
          </Tbody>
          {isLoading && (
            <Flex mt="md" justifyContent={"center"}>
              <Text color="brand.200">Loading...</Text>
            </Flex>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
