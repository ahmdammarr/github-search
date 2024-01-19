import { Flex, Skeleton } from "@chakra-ui/react";
import { Suspense } from "react";
import RepoDetails from "@app/ui/components/blocks/repo-details/repo-details";

export default async function Page({
  params,
  searchParams,
}: {
  params?: { repo: string };
  searchParams?: {
    owner: string;
    name: string;
  };
}) {

  const {owner, name} = searchParams || {}

  return (
    <Flex
      w="100%"
      h="100%"
      alignItems={"center"}
      flexDir={"column"}
      overflowY={"scroll"}
    >
      <Suspense fallback={<Skeleton />}>
        <RepoDetails owner={owner} name={name}/>
      </Suspense>
    </Flex>
  );
}
