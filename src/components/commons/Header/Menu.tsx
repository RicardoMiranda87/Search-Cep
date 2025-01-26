import { MenuCloseIcon } from "@/components/icons/MenuCloseIcon"
import Image from "next/image"
import Link from "next/link"

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({isVisible, onClose}: MenuProps) => {
  return (
    <div className={`
      ${isVisible ? 'flex' : 'invisible'}
      fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden
    `}>
      <div className="w-full h-full bg-h-blue-900 shadow-md py-4 px-5">
        <div className="flex justify-between mb-5">
          <Link href="/">
            <Image src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg" width={55} height={55} alt=""/>
          </Link>
          <button onClick={onClose}>
            <MenuCloseIcon className="fill-white w-10 h-10" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-xl p-5 items-center">
          <Link href="/" onClick={onClose}>Início</Link>
          <Link href="/search_cep" onClick={onClose}>Buscar CEP</Link>
        </nav>
      </div>
    </div>
  )
}
