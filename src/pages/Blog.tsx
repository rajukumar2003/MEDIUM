import { useParams } from "react-router-dom";
import { ExpandedBlog } from "../components/ExpandedBlog";
import { useBlog } from "../hooks"
import { ExpandedBlogSkeleton } from "../components/ExpandedBlogSkeleton";
import { AppBar } from "../components/AppBar";

export const Blog = () => {
    const { id } = useParams();

    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            <AppBar publishBtn={true} />
            <ExpandedBlogSkeleton/>
            
        </div>
    }

    return (
        <div>
            {blog && <ExpandedBlog blog={blog}/>}
        </div>
    )
}