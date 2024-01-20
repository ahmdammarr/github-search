import { Flex } from "@chakra-ui/react";
import Search from "./ui/components/blocks/search/search";
import AppSkeleton from "./ui/components/blocks/skeleton/skeleton";
import { Suspense } from "react";
import Results from "./ui/components/blocks/results/results";
import EmptySearch from "./ui/components/blocks/empty-search/empty-search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    cursor?:string
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const cursor = searchParams?.cursor
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <Flex
      w="100%"
      h="100%"
      alignItems={"center"}
      flexDir={"column"}
      overflowY={"scroll"}
    >
      <Search />
      {query ? (
        <Suspense key={query + currentPage} fallback={<AppSkeleton />}>
          <Results query={query} cursor={cursor}/>
        </Suspense>
      ) : (
        <EmptySearch />
      )}
    </Flex>
  );
}
