"use client";
import { Input, InputProps } from "@chakra-ui/react";
import { LegacyRef, forwardRef } from "react";

const BaseInput = forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
    return <Input ref={ref} {...props} />;
  }
);
export default BaseInput;
