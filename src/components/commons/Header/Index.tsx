import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu"
import { useCallback, useState } from "react";
import { MenuIcon } from "@/components/icons/MenuIcon";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-pz-blue-900 text-sm flex py-5 px-5 justify-between items-center sticky top-0 z-20">
      <Link href="/">
        <Image 
          src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg" 
          width={55} 
          height={55} 
          alt="Clica para voltar para o início"
        />
      </Link>
      <button className="p-1 md:hidden" onClick={openMenu}>
        <MenuIcon className="fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">Início</Link>
        <Link href="/search_cep">BuscarCEP</Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};