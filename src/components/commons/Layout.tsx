import { ReactNode } from "react";
import { Header } from "./Header/Index";
import { Footer } from "./Footer";
import { Montserrat } from "next/font/google"

interface LayoutProps {
  children: ReactNode;
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
})

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={montserrat.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};