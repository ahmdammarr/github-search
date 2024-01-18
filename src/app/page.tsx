import { Button } from "@chakra-ui/react";
import styles from "./page.module.css";
import BaseButton from "@ui/components/base/base-button";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My App</h1>
      <BaseButton title="Button" />
    </main>
  );
}
