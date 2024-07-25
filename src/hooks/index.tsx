import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog{
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string,
    }
};

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            console.error("ID is missing");
            setError("ID is missing");
            setLoading(false);
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Token is missing");
            setError("Token is missing");
            setLoading(false);
            return;
        }

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                setBlog(res.data.blog);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching blog:", err);
                setError("Error fetching blog");
                setLoading(false);
            });
    }, [id]);

    return {
        loading,
        blog,
        error
    };
};



export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                setBlogs(res.data.blogs);
                setLoading(false)
            });
    }, []);

    return {
        loading,
        blogs
    }
}