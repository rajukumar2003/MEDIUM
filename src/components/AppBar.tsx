import { Link } from "react-router-dom"

export const AppBar = () => {
    return (
        <div className="border-b flex flex-wrap justify-between px-4 py-4 md:px-10">
            <Link to={'/blogs/'} className="flex font-serif text-xl md:text-2xl font-extrabold cursor-pointer">
                <div className="mr-2 md:mr-4 md:ml-8">
                    <svg width="40px" height="40px" viewBox="0 -55 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z" fill="#000000" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center">
                    MEDIUM
                </div>
            </Link>

            <Link to={'/publish'} className="mt-4 md:mt-0">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-black bg-[linear-gradient(110deg,#ffffff,45%,#d1d1d1,55%,#ffffff)] bg-[length:200%_100%] px-4 md:px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white">
                    Publish Your Own Blog
                </button>
            </Link>
        </div>
    )
}
