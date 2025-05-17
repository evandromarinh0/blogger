import { Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import Image from "next/image";

const ptSansCaption = PT_Sans_Caption({ subsets: ['latin'], weight: '700' });

const customerStories = [
  {
    name: 'Annette Bones',
    role: 'CEO na Anne Corp',
    img: '/customer-01.png',
    text: 'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
  },
  {
    name: 'Jacob Jones',
    role: 'CEO na JJ Org',
    img: '/customer-02.png',
    text: 'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
  },
];


export function CustomerStorySection(){
  return(
    <section className="relative container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className={`${ptSansCaption.className} text-heading-xl text-gray-100`}>Quem utiliza, aprova!</h2>
      
        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customer) => (
            <div key={customer.name} className="bg-gray-600 flex flex-col gap-6 rounded-lg p-6 md:p-12">
            <p className="text-balance text-gray-200">{customer.text}</p>

            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={`${customer.img}`} alt="Customer Image" fill className="object-cover" />
              </div>

              <div className="flex flex-col">
                <strong className="text-gray-200 text-sm">{customer.name}</strong>
                <span className="text-gray-300 text-xs">{customer.role}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
        
        <div className="absolute -bottom-8 h-16 w-16 rounded-full bg-cyan-300 flex justify-center items-center">
          <Store className="h-8 w-8 text-cyan-200" />
        </div>
      </div>
    </section>
  );
}