import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Markdown } from "@/components/markdown";
import { CallToAction } from "@/components/call-to-action";
import { Button } from "@/components/ui/button";
import { Linkedin, Slack, Twitter } from "lucide-react";

export default function PostPage(){
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find((post) => post.slug?.toLowerCase().includes(slug?.toLowerCase()));
  const formattedPostDate = new Date(post?.date ?? 0).toLocaleDateString("pt-BR");

  function HandleClick(social: string){
    const url = encodeURIComponent('https://blogger-flame-tau.vercel.app/blog/second-post');
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    const slackUrl = `https://www.slack.com/share?url=${url}`;
    const xUrl = `https://www.x.com/intent/tweet?url=${url}`;

    if(social === 'LinkedIn'){
      window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    }

    if(social === 'Slack'){
      window.open(slackUrl, '_blank', 'noopener,noreferrer');
    }

    if(social === 'X'){
      window.open(xUrl, '_blank', 'noopener,noreferrer');
    }

  };

  if(!post){
    return <></>
  }

  return(
    <>
    <main className="container mt-32 pb-32">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link className="text-gray-100 text-action-sm" href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-action-sm text-gray-100" />

          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{post.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap:12">
        <article className="bg-gray-700 rounded-t-lg overflow-hidden border-gray-400 border-[1px]">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg h-[264px]">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </figure>

          <header className="p-4 pb-0 md:px-12 lg:px-12">
            <h1 className="mb-6 text-heading-lg md:text-heading-xl lg:text-heading-xl text-gray-100">{post.title}</h1>

            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border-blue-200 border-[1px]">
                <Image src={post.author.avatar} alt="Imagem do autor do post" fill className="rounded-md object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-body-sm text-gray-300">{post.author.name}</span>
                <span className="text-body-xs text-gray-300">Publicado em {formattedPostDate}</span>
              </div>
            </div>
          </header>

          <div className="prose prove-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
            <Markdown content={post.body.raw} />
          </div>
        </article>

        <div className="flex flex-col gap-2">
          <h2 className="text-gray-100 text-heading-xs mb-3">Compartilhar</h2>

          <Button variant="ghost" className="flex items-center justify-start w-[223px] text-action-sm text-gray-100 border-gray-400 border hover:border-blue-300" onClick={() => HandleClick("LinkedIn")}><Linkedin />LinkedIn</Button>
          <Button variant="ghost" className="flex items-center justify-start w-[223px] text-action-sm text-gray-100 border-gray-400 border hover:border-blue-300" onClick={() => HandleClick("Slack")}><Slack />Slack</Button>
          <Button variant="ghost" className="flex items-center justify-start w-[223px] text-action-sm text-gray-100 border-gray-400 border hover:border-blue-300" onClick={() => HandleClick("X")}><Twitter />X</Button>
        </div>
      </div>

    </main>
    <CallToAction />
    </>
  );
}