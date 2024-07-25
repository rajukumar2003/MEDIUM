export const ExpandedBlogSkeleton = () => {
    return (
        <div>
            <div className="animate-pulse">
                <div className=" flex justify-center">
                    <div className=" grid grid-cols-12 px-12 w-full pt-10 max-w-screen-xl">
                        <div className=" col-span-8">
                            <div className="h-8 bg-gray-200 rounded-full max-w-[720px] mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-4"></div>
                            <div className="space-y-4">
                                {Array(6).fill(null).map((_, index) => (
                                    <div key={index} className="h-4 bg-gray-200 rounded-full max-w-[720px]"></div>
                                ))}
                            </div>
                        </div>
                        <div className=" col-span-4">
                            <div className=" text-slate-500 pb-4">Author</div>
                            <div className=" flex items-center">
                                <div className="h-12 w-12 bg-gray-200 rounded-full mr-3"></div>
                                <div>
                                    <div className="h-4 bg-gray-200 rounded-full max-w-[120px] mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded-full max-w-[200px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
