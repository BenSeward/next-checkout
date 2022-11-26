import type { AppProps } from "next/app";
import { useCartStore } from "src/stores/cartItems";

export default function App({ Component, pageProps }: AppProps) {
  const { initializeStore } = useCartStore();
  initializeStore(pageProps.initializeStore);

  return <Component {...pageProps} />;
}
