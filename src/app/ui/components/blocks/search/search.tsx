import { Flex } from "@chakra-ui/react";
import React from "react";
import BaseInput from "../../base/base-input";
import BaseButton from "../../base/base-button";
import { toRem } from "@app/utils/to-rem";

export default function Search() {
  return (
    <Flex
      w="80%"
      maxH={toRem(48)}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt="sm"
    >
      <BaseInput placeholder="Search for a repo" w={"80%"} h="100%" />
      <BaseButton title="Search" h="100%" />
    </Flex>
  );
}
