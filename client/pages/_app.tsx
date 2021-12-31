import { AppProps } from "next/app";
import { Reset } from "styled-reset";
import { createClient, Provider } from "urql";
import { GlobalStyles } from "../styles/globalStyles";

const client = createClient({
  url: "http://localhost:7000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
