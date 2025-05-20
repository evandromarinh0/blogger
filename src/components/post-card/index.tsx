import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  avatar: string;
}

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: Author;
}

export function PostCard(props: PostCardProps){
  return(
    <Link href={`/blog/`} className="w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300">
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative bg-slate-400 rounded-3xl">
          <div className="absolute -top-2 -right-2 px-3 py-1 bg-gray-600 rounded-l-xl">
            <span className="text-gray-300 text-body-xs">{props.date}</span>
          </div>
          
          <Image src={props.imageUrl} alt="Imagem do post" width={288} height={144} className="w-full h-40 object-cover object-center rounded-2xl" />
        </div>


        <div className="px-2 mt-4 space-y-4 ">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">{props.title}</h2>
          <p className="text-gray-300 text-body-sm line-clamp-3">{props.description}</p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-blue-200 border-[1px]">
              <Image src={props.author.avatar} alt="Imagem do autor do post" fill className="rounded-md object-cover" />
            </div>
            <span className="text-body-sm text-gray-300 ">{props.author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}