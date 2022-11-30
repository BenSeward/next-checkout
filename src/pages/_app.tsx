import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { sessionRehydration, useStore } from "src/store";

export default function App({ Component, pageProps }: AppProps) {
  const { updateInitialize, initialized } = useStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    sessionRehydration.then(() => {
      setHydrated(true);

      if (!initialized) {
        updateInitialize({ update: pageProps.initializeStore, type: "UPDATE" });
      }
    });
  }, [initialized, pageProps.initializeStore, updateInitialize]);

  if (!hydrated) {
    return null;
  }

  return <Component {...pageProps} />;
}
