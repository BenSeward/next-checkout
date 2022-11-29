import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { sessionRehydration, useStore } from "src/store";

export default function App({ Component, pageProps }: AppProps) {
  const { dispatchInitialize, initialized } = useStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    sessionRehydration.then(() => {
      setHydrated(true);

      if (!initialized) {
        dispatchInitialize(pageProps.initializeStore, "UPDATE");
      }
    });
  }, [initialized, pageProps.initializeStore, dispatchInitialize]);

  if (!hydrated) {
    return null;
  }

  return <Component {...pageProps} />;
}
