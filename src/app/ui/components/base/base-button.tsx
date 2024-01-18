import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

type BASE_BUTTON_PROPS = { title: string } & ButtonProps;
export default function BaseButton(props: BASE_BUTTON_PROPS) {
  const { title, ...rest } = props;
  return <Button {...rest}>{title}</Button>;
}
