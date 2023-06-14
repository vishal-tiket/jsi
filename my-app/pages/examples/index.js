import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { jsiNavbarHandler } from "../helper";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const callback = (event) => {
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
  };

  useEffect(() => {
    jsiNavbarHandler(false)

    window.addEventListener("nativeJSICallback", callback);
  
    return () => {
      window.removeEventListener("nativeJSICallback", callback);
    };
  }, []);

  if (showContent || showHeader) {
    return (
      <div className={styles.container} style={{ background: "#000" }}>
        <Head>
          <title>Webview - JSI POC</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
        </Head>

        {!!isLoading ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            Loading ...
          </div>
        ) : (
          <>
            <main className={styles.main}>
              <div
                className={styles.safe_area}
                style={{ background: "black" }}
              ></div>
              <h1 className={styles.title} style={{ color: "white" }}>
                Next.JS <a href="https://nextjs.org">Examples</a>
              </h1>

              <p className={styles.description} style={{ color: "white" }}></p>
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
