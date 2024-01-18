import styles from "./page.module.css";
import BaseButton from "@ui/components/base/base-button";
import BaseText from "./ui/components/base/base-text";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My App</h1>
      <BaseButton title="Button" />
      <BaseText size="xs">Hele</BaseText>
    </main>
  );
}
