import { PostCard } from "@/components/post-card";

export default function BlogPage(){
  return(
    <div className="flex flex-col py-24 flex-grow h-full bg-gray-700">
      <header className="pb-8 md:pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">BLOG</span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">Dicas e estratégias para impulsionar seu negócio</h1>
          </div>
        </div>
      </header>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard title="Transformando seu negócio em uma loja virtual" description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos." author={{ avatar: '/customer-01.png', name: 'Aspen Dokidis' }} date="20/12/2024" imageUrl="/assets/first-post.png" slug="/transformando" />
        <PostCard title="Transformando seu negócio em uma loja virtual" description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos." author={{ avatar: '/customer-01.png', name: 'Aspen Dokidis' }} date="20/12/2024" imageUrl="/assets/first-post.png" slug="/transformando" />
        <PostCard title="Transformando seu negócio em uma loja virtual" description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos." author={{ avatar: '/customer-01.png', name: 'Aspen Dokidis' }} date="20/12/2024" imageUrl="/assets/first-post.png" slug="/transformando" />
      </div>
    </div>
  );
}