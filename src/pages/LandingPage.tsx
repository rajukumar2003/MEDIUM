export const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow bg-[#f6f4ed]">
                <AppBar publishBtn={false} />
                <div className="font-serif">
                    <TypewriterEffectSmoothDemo />
                </div>
            </div>
            <Footer />
        </div>
    );
};

"use client";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Footer } from "../components/Footer";

export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Human",
        },
        {
            text: "stories",
        },
        {
            text: "&",
        },
        {
            text: "ideas ",
        },
        {
            text: "MEDIUM.",
            className: "text-green-600 ",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem] px-4 sm:px-8 md:px-12 lg:px-16 text-center">
            <p className="text-neutral-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
                A place to read, write, and deepen your understanding
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <Link to={'/signup'}>
                    <button className="relative inline-block px-8 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white ">Sign Up</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
