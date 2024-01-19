import { Box, Checkbox, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import BaseText from "../../base/base-text";
import { getQuery } from "@app/utils/api-config/get-query";
import BaseButton from "../../base/base-button";
import Link from "next/link";

export default async function RepoDetails({
  owner,
  name,
}: {
  owner?: string;
  name?: string;
}) {
  const result = await getQuery({
    url: process.env.base_url || "",
    query: `
    query SearchRepoById($owner: String!, $name: String!) {
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
      
            `,
    variables: { owner, name },
  });
  const repo = result?.data?.repository;
  return (
    <Flex mt="lg" flexDirection={"column"}>
        <Flex justifyContent={'space-between'}>
      <BaseText as="h3" size={"lg"}>
        {repo.name} 
      </BaseText>
     <BaseButton
     as={Link}
     bgColor='brand.200'
     title="Home Page"
     href={repo.homepageUrl}
     size={'md'}
     />
      </Flex>
      <Box py='lg'>
      <BaseText as="p" size={"md"}>
         {repo.description}
      </BaseText>
      <Stack spacing={5} direction="row">
       
        <Checkbox isDisabled defaultChecked={!repo.isPrivate}>
          Checkbox
        </Checkbox>
      </Stack>
      </Box>
    </Flex>
  );
}
