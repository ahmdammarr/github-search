import { Box, Checkbox, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import BaseText from "../../base/base-text";
import { getQuery } from "@app/utils/api-config/get-query";
import BaseButton from "../../base/base-button";
import Link from "next/link";
import { getRepo } from "./queries/getRepo";
import { Query } from "@app/graphql/types/graphql";

export default async function RepoDetails({
  owner,
  name,
}: {
  owner?: string;
  name?: string;
}) {
  const result: { data: Query } = await getQuery({
    url: process.env.graphql_base_url || "",
    query: `${getRepo}`,
    variables: { owner, name },
  });
  const repo = result?.data?.repository;
  return (
    <Flex mt="lg" flexDirection={"column"}>
      <Flex justifyContent={"space-between"}>
        <BaseText as="h3" size={"lg"}>
          {repo?.name}
        </BaseText>
        <BaseButton
          as={Link}
          bgColor="brand.200"
          title="Home Page"
          href={repo?.homepageUrl}
          size={"md"}
        />
      </Flex>
      <Box py="lg">
        <BaseText as="p" size={"md"}>
          {repo?.description}
        </BaseText>
        <Stack spacing={5} direction="row">
          <Checkbox isDisabled defaultChecked={!repo?.isPrivate}>
            Checkbox
          </Checkbox>
        </Stack>
      </Box>
    </Flex>
  );
}
