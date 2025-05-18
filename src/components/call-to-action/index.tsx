import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({ subsets: ['latin'], weight: '700' });


export function CallToAction(){
  return(
    <section className="py-24 flex flex-col gap-10 justify-center items-center bg-[url('/call-to-action.png')] bg-cover bg-no-repeat w-full h-320">
      <h2 className={`${ptSansCaption.className} text-gray-100 text-balance text-center text-heading-xl`}>Cria uma loja online e inicie suas vendas ainda hoje</h2>

      <Button className="w-fit rounded-full mt-4 md:mt-auto md:flex text-white" asChild> 
        <Link href="/criar-loja">
          Criar loja grátis
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}