import Image from "next/image";
import Link from "next/link";

export function Footer(){
  return(
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Link href="/">
            <Image src="/logo.svg" width={24} height={24} alt="Imagem da logo" />
          </Link>


          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            <Link href="/agreement-terms" className="hover:text-blue-200">Termos de uso</Link>
            <Link href="/politics" className="hover:text-blue-200">Política de Privacidade</Link>
            <Link href="/feedback" className="hover:text-blue-200">Enviar feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}