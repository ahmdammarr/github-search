"use client";

import { theme } from "@app/ui/theme/theme";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function ChakraClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCleint, setisCleint] = useState(false);
  useEffect(() => {
    setisCleint(true);
  }, []);
  return isCleint ? (
    <ChakraProvider theme={theme}>
      <Flex bg={'red'}>{children}</Flex>
    </ChakraProvider>
  ) : (
    <>{children}</>
  );
}
