import Link from "next/link";
import { AppLayoutProps } from "../../pages/index";

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <nav>
        <Link href="/" locale="fr">
          <a>To /fr</a>
        </Link>
        <Link href="/" locale="pt">
          <a>To /pt</a>
        </Link>
        <Link href="/" locale="es">
          <a>To /es</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
