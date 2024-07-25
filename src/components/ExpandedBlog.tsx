import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const ExpandedBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <AppBar />
            <div className="flex justify-center px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full pt-10 max-w-screen-xl">
                    <div className="md:col-span-8">
                        <div className="text-3xl md:text-5xl font-extrabold">
                            {/* Elon Musk sets new date for Tesla robotaxi reveal, calls everything beyond autonomy ‘noise’ */}
                            {blog.title}
                        </div>
                        <div className="py-2 font-normal text-slate-500 text-sm">
                            Posted on August 24, 2024
                        </div>
                        <div className="pt-2">
                            {/* Meta AI, Meta’s AI-powered assistant across Facebook, Instagram, Messenger and the web, can now speak in more languages and create stylized selfies.
                            And, starting today, Meta AI users can route questions to Meta’s newest flagship AI model, Llama 3.1 405B, which the company says can handle more complex queries than the previous model underpinning Meta AI. */}
                            {blog.content}
                        </div>
                    </div>

                    <div className="md:col-span-4 mt-8 md:mt-4">
                        <div className="text-slate-500 md:pb-4">Author</div>
                        <div className="flex pt-3 md:pt-0">
                            <div className="pr-2 md:pr-3 flex flex-col justify-center">
                                <Avatar name={blog.author.name} />
                            </div>
                            <div className=" md:mt-0">
                                <div className="text-xl font-semibold">
                                    {blog.author.name}
                                </div>
                                <div className="text-slate-400">
                                    Some more info about the author
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
