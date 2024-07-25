import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Footer } from "../components/Footer";
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if (loading) {

        return <div>
            <AppBar publishBtn={true} />
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
                <AppBar publishBtn={ true} />
            </div>
            <div className=" flex justify-center p-6 ">
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
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}