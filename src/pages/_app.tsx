import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { sessionRehydration, useStore } from "src/store";

export default function App({ Component, pageProps }: AppProps) {
  const { initializeStore, initialized } = useStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    sessionRehydration.then(() => {
      setHydrated(true);

      if (!initialized) {
        initializeStore(pageProps.initializeStore);
      }
    });
  }, [initialized, pageProps.initializeStore, initializeStore]);

  if (!hydrated) {
    return null;
  }

  return <Component {...pageProps} />;
}
