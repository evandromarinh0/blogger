import { PostCard } from "@/components/post-card";
import { allPosts } from "contentlayer/generated";

export default function BlogPage(){
  const posts = allPosts;

  if(!posts) {
    return <></>
  }

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
        {posts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString("pt-BR");
          const trimmedUrl = post.image.trim();

          return(
          <PostCard key={post._id} title={post.title} description={post.description} author={{ avatar: post.author.avatar, name: post.author.name }} date={formattedDate} imageUrl={trimmedUrl} slug={post.slug} />
          )
        })}
      </div>
    </div>
  );
}