"use client";
import { toRem } from "@app/utils/to-rem";
import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

export default function AppSkeleton() {
  return (
    <Stack w={"90%"} mt="xl">
      <Skeleton height={toRem(24)} />;
      <Skeleton height={toRem(24)} />;
      <Skeleton height={toRem(24)} />;
      <Skeleton height={toRem(24)} />;
      <Skeleton height={toRem(24)} />;
      <Skeleton height={toRem(24)} />;
      <Skeleton height={toRem(24)} />;
    </Stack>
  );
}
