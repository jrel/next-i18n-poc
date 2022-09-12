interface NoopLayoutProps {
  children: React.ReactNode;
}
export default function NoopLayout({ children }: NoopLayoutProps) {
  return <>{children}</>;
}
