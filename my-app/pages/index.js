import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { jsiNavbarHandler } from "../helper/jsi";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [error, setError] = useState("");

  const callback = (event) => {
    alert(JSON.stringify(event));
    const jsiResponse = JSON.parse(event?.data);
    const { command, error, response } = jsiResponse || {};

    if (error?.message) {
      setError(error?.message || 'JSI failed');
      return;
    }

    if (command === "toggleNavbarVisibility" && response) {
      setShowHeader(true);
      setIsLoading(true);
      function apiSimulation() {
        setTimeout(() => {
          setIsLoading(false);
          setShowContent(true);
          setShowHeader(false);
        }, 2000);
      }

      apiSimulation();
      return;
    }
  };

  useEffect(() => {
    jsiNavbarHandler(true);

    window.addEventListener("nativeJSICallback", callback);

    if (window?.callNativeJSI) {
      window.callNativeJSI.onmessage = function (data) {
        callback(data);
      };
    }

    return () => {
      window.removeEventListener("nativeJSICallback", callback);
    };
  }, []);

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error}
      </div>
    );
  }

  if (showContent || showHeader) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Webview - JSI POC</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
        </Head>

        {showHeader ? (
          <>
            <div className={styles.safe_area}></div>
            <div className={styles.header}>
              <Link className={styles.backButton} href="/docs">{`<`}</Link>
              <span>Home Page</span>
            </div>
            {!!isLoading && (
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Loading ...
              </div>
            )}
          </>
        ) : (
          <>
            <main className={styles.main}>
              <div className={styles.safe_area}></div>
              <div className={styles.header}>
                <Link className={styles.backButton} href="/docs">{`<`}</Link>
                <span>Home Page</span>
              </div>
              <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.JS</a>
              </h1>

              <p className={styles.description}>
                Get started by editing{" "}
                <code className={styles.code}>pages/index.js</code>
              </p>

              <div className={styles.grid}>
                <Link href="/docs" className={styles.card}>
                  <h2>Documentation &rarr;</h2>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </Link>

                <Link href="/learn" className={styles.card}>
                  <h2>Learn &rarr;</h2>
                  <p>
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </Link>

                <a href="/examples" className={styles.card}>
                  <h2>Examples &rarr;</h2>
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </a>

                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={styles.card}
                >
                  <h2>Deploy &rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
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
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                  />
                </span>
              </a>
            </footer>
          </>
        )}
      </div>
    );
  }

  return <></>;
}
