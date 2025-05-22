import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({ subsets: ['latin'], weight: '700' });


export function CallToAction(){
  return(
    <section className="relative py-24 flex flex-col gap-10 justify-center items-center bg-[url('/call-to-action.png')] bg-cover bg-no-repeat w-full h-320">
      <div className="absolute -top-8 h-16 w-16 rounded-full bg-cyan-300 flex justify-center items-center">
        <Store className="h-8 w-8 text-cyan-200" />
      </div>
      <h2 className={`${ptSansCaption.className} text-gray-100 text-balance text-center text-heading-md md:text-heading-xl`}>Crie uma loja online e inicie suas vendas ainda hoje</h2>

      <Button className="w-fit rounded-full mt-4 md:mt-auto md:flex text-white" asChild> 
        <Link href="/criar-loja">
          Criar loja grátis
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}