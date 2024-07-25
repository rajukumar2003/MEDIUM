import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if (loading) {

        return <div>
            <AppBar/>
            <div className=" flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <div>
                <AppBar/>
            </div>
            <div className=" flex justify-center p-6">
                <div className=" max-w-lg">
                    {blogs.map(( blog => 
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            title= {blog.title}
                            content={blog.content}
                            authorName={blog.author.name || 'Anonymous'}
                            publishedDate="July 24,2024" />
                    ))}
                    {/* <BlogCard title="Elon Musk sets new date for Tesla robotaxi reveal, calls everything beyond autonomy ‘noise’" content="Elon Musk says he will show off Tesla’s purpose-built “robotaxi” prototype during an event October 10, after scrapping a previous plan to reveal it August 8. Musk said Tesla will also show off “a couple of other things,” but didn’t explain what that meant." authorName="Raju K" publishedDate="July 24,2024" /> */}
                    {/* <BlogCard title="Meta AI gets new ‘Imagine me’ selfie feature" content="Meta AI, Meta’s AI-powered assistant across Facebook, Instagram, Messenger and the web, can now speak in more languages and create stylized selfies. And, starting today, Meta AI users can route questions to Meta’s newest flagship AI model, Llama 3.1 405B, which the company says can handle more complex queries than the previous model underpinning Meta AI." authorName="Raju K" publishedDate="July 24,2024" /> */}
                </div>
            </div>
        </div>
    )
}