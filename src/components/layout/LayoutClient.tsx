import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import styles from './LayoutClient.module.scss';

export const LayoutClient = ({children}: PropsWithChildren<unknown>) => {
  return (
    <main className={styles.layout}>
      <Sidebar />

      <section>{children}</section>
    </main>
  )
}
