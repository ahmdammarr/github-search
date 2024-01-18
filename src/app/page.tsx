import BaseButton from "@ui/components/base/base-button";
import BaseText from "./ui/components/base/base-text";
import BaseInput from "./ui/components/base/base-input";

export default function Home() {
  return (
    <>
      <h1>My App</h1>
      <BaseButton title="Button" />
      <BaseText size="xs">Hele</BaseText>
      <BaseInput placeholder="dkgfh" />
    </>
  );
}
