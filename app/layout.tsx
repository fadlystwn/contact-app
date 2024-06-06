import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Navigation />
            <main className={styles.main}>{children}</main>
          </section>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
