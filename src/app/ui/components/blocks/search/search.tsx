"use client"
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import BaseInput from "../../base/base-input";
import BaseButton from "../../base/base-button";
import { toRem } from "@app/utils/to-rem";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  function handleSearch(keyword: string) {
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set("query", keyword);
    } else {
      params.delete("query");
    }
    push(`${pathname}?${params.toString()}`);
  }

  return (
    <Flex
      w="80%"
      height={toRem(48)}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt="sm"
    >
      <BaseInput
        placeholder="Search for a repo"
        w={"80%"}
        h="100%"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <BaseButton
        title="Search"
        h="100%"
        onClick={() => handleSearch(searchKeyword)}
      />
    </Flex>
  );
}
