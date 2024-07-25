import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
    return (
        <div role="status" className=" animate-pulse ">
            <div className="border-b b-4 pb-4 pt-4 cursor-pointer w-screen max-w-screen-md">
                <div className="flex pb-2">
                    <div className="flex justify-center flex-col">
                        <div className="h-10 w-10 bg-gray-200 rounded-full mb-4"></div>
                    </div>
                    <div className="pl-2 font-thin text-sm">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-400 text-sm">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="font-semibold text-xl pt-2 pb-1 font-serif">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-md font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-slate-400 text-sm font-thin pt-1">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
        </div>
    );
};
