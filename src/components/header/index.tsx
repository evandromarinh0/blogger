import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const linkStyles = 'text-action-sm font-medium transition-colors hover:text-blue-200';

  return(
    <header className="fixed top-0 z-1 w-full border-b border-white/10 bg-gray-500 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Image src="/logo.svg" width={24} height={24} alt="Imagem da logo" />

          <nav className="flex items-center gap-6">
            <Link href="/" className={cn(linkStyles, router.pathname === '/' ? 'text-blue-200' : 'text-gray-100')}>Início</Link>
            <Link href="/blog" className={cn(linkStyles, router.pathname.startsWith('/blog') ? 'text-blue-200' : 'text-gray-100')}>Blog</Link>
            <Button variant="secondary">Começar</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}