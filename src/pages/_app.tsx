import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { IntlProvider } from "next-intl";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider messages={pageProps.messages} locale="cs">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </IntlProvider>
  );
}
