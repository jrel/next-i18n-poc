import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import type { AppProps } from "next/app";

import { IntlConfig, IntlProvider } from "react-intl";
import API from "../API";
import NoopLayout from "./layouts/NoopLayout";

async function loadSettings(dirtyLocale: string) {
  const { defaultLocale } = await API.settings();
  const locale = dirtyLocale === "default" ? defaultLocale : dirtyLocale;
  const { messages } = await API.locale(locale);

  return {
    defaultLocale,
    locale,
    messages,
  };
}

export async function getMyAppStaticProps<P>(
  context: GetStaticPropsContext,
  extraProps?: P
): Promise<GetStaticPropsResult<MyAppProps>> {
  if (context.locale === undefined) throw new Error("unexpected");
  const props = await loadSettings(context.locale);

  if (context.locale === "default") {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      ...extraProps,
      ...props,
    },
  };
}

export interface MyAppProps {
  messages: IntlConfig["messages"];
  locale: string;
  defaultLocale: string;
}

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const { messages, locale, defaultLocale } = pageProps;
  const Layout = (Component as any).Layout ?? NoopLayout;

  if (Component instanceof Error) return <Component {...pageProps} />;

  return (
    <>
      <IntlProvider
        messages={messages}
        locale={locale}
        defaultLocale={defaultLocale}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  );
}
