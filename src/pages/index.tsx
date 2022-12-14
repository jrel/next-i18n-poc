import { GetStaticProps } from "next";
import React from "react";
import { FormattedMessage } from "react-intl";
import Currency from "../components/Currency";
import { AppLayout } from "../components/layouts/AppLayout";
import { getMyAppStaticProps, MyAppProps } from "../components/MyApp";

interface HomeProps extends MyAppProps {}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return await getMyAppStaticProps(context);
};

export default function Home() {
  return (
    <>
      <Currency value={10} />
      <FormattedMessage id="today" values={{ timestamp: Date.now() }} />
    </>
  );
}

export interface AppLayoutProps {
  children: React.ReactNode;
}

Home.Layout = AppLayout;
