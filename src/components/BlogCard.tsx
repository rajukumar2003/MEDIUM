import { Link } from "react-router-dom";

interface BlogCardProps{
    title: string,
    content: string,
    authorName: string,
    publishedDate: string,
    id: string,
};


export const BlogCard = ({ id, title, content, authorName, publishedDate }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className=" border-b b-4 pb-4 pt-4 cursor-pointer">
                <div className=" flex pb-2">
                    <div className=" flex justify-center flex-col">
                        <Avatar name={authorName} />
                    </div>
                    <div className=" pl-2 font-thin text-sm">
                        {authorName }
                    </div>
                    <div className=" flex justify-center flex-col pl-2">
                        <Circle/>
                    </div>
                    <div className=" pl-2 font-thin text-slate-400 text-sm">
                        {publishedDate}
                    </div>
                </div>
                <div className=" font-semibold text-xl pt-2 pb-1 font-serif">
                    {title}
                </div>
                <div className=" text-md font-thin">
                    {content.slice(0, 100) + '...'}
                </div>
                <div className=" text-slate-400 text-sm font-thin pt-1">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
                
            </div>
        </Link>
    )
};

export function Avatar({name} : {name:string}) {
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className=" text-gray-600 dark:text-gray-300 font-extralight">{ name[0] }</span>
        </div>
    );
}

export function Circle() {
    return <div className=" h-1 w-1 rounded-full bg-[#ff4000]">  </div>
}