import Head from "next/head";
import { useEffect, useState } from "react";
import { top, bottom, left, right, support } from "safe-area-insets";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [safeAreaInsets, setSafeAreaInstes] = useState({});

  useEffect(() => {
    window?.webkit?.messageHandlers?.hideNavbar?.postMessage("");
    window?.native?.hideNavbar();

    function apiSimulation() {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }

    // apiSimulation();

    setSafeAreaInstes(support ? { top, left, bottom, right } : {});
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading ...
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      style={{
        "--safe-area-inset-top": safeAreaInsets?.top,
        "--safe-area-inset-left": safeAreaInsets?.left,
        "--safe-area-inset-bottom": safeAreaInsets?.bottom,
        "--safe-area-inset-right": safeAreaInsets?.right,
      }}
    >
      <Head>
        <title>Webview - JSI POC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      <div className={styles.safe_area}></div>
      <div className={styles.header}>Home Page</div>

      <main className={styles.main} style={{ paddingTop: `${128 + safeAreaInsets?.top}px` }}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.JS</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
