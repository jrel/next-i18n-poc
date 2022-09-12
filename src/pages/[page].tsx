import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { AppLayout } from "../components/layouts/AppLayout";
import { getMyAppStaticProps, MyAppProps } from "../components/MyApp";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<MyAppProps> = async (context) => {
  return await getMyAppStaticProps(context, {
    page: context.params!.page,
  });
};

interface PageProps {
  page: string;
}

export default function Page({ page }: PageProps) {
  return <> {page}</>;
}

export interface AppLayoutProps {
  children: React.ReactNode;
}

Page.Layout = AppLayout;
