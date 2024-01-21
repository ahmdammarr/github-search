import { Flex } from "@chakra-ui/react";
import Search from "./ui/components/blocks/search/search";
import AppSkeleton from "./ui/components/blocks/skeleton/skeleton";
import { Suspense } from "react";
import Results from "./ui/components/blocks/results/results";
import EmptySearch from "./ui/components/blocks/empty-search/empty-search";
import { getServerSession } from "next-auth";
import { authOptions } from "./providers/auth-provider";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    cursor?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const cursor = searchParams?.cursor;
  const currentPage = Number(searchParams?.page) || 1;
  const session = await getServerSession(authOptions);

  if (!session) redirect("api/auth/signin");

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
          <Results query={query} cursor={cursor} />
        </Suspense>
      ) : (
        <EmptySearch />
      )}
    </Flex>
  );
}
