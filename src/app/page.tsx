import { Flex } from "@chakra-ui/react";
import Search from "./ui/components/blocks/search/search";

export default function Home() {
  return (
    <Flex w="100%" h="100%" justifyContent={'center'}>
      <Search />
    </Flex>
  );
}
