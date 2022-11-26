import type { AppProps } from "next/app";
import { useStore } from "src/store";

export default function App({ Component, pageProps }: AppProps) {
  const { initializeStore } = useStore();
  initializeStore(pageProps.initializeStore);

  return <Component {...pageProps} />;
}
