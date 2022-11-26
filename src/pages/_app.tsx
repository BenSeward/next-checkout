import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useStore } from "src/store";

export default function App({ Component, pageProps }: AppProps) {
  const { initializeStore } = useStore();

  useEffect(() => {
    initializeStore(pageProps.initializeStore);
  }, []);

  return <Component {...pageProps} />;
}
