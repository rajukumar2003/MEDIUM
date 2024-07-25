import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-[#f6f4ed] border-t py-4 flex-shrink-0">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-500">
                        Made with ♥ by Raju Kumar
                    </p>
                    <div className="flex space-x-4">
                        {/* <Link to="/" className="text-slate-500 hover:text-black">Home</Link>
                        <Link to="/blogs" className="text-slate-500 hover:text-black">Blogs</Link>
                        <Link to="/about" className="text-slate-500 hover:text-black">About</Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
