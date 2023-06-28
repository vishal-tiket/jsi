import Head from "next/head";
import { useEffect, useState } from "react";

import { Header } from "../components/header";
import { Loader } from "../components/loader";
import { PageContent } from "../components/pageContent";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 500);

    setTimeout(() => {
      setShowContent(true);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Webview - Hide Toolbar POC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Header title={"Home"} previousUrl={""} />
      {isLoading && <Loader />}
      {showContent && (
        <PageContent title={"Home Page"} urls={["/about", "/booking"]} />
      )}
    </>
  );
}
