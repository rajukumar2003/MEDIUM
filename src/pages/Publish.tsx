import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';

export const Publish = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                    <Link to={'/blogs/'} >
                        <div className="mr-4 ml-8">
                            <svg width="50px" height="50px" viewBox="0 -55 256 256" xmlns="http://www.w3.org/2000/svg">
                                <path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z" fill="#000000" />
                            </svg>
                        </div>
                    </Link>
                    <div className="text-gray-600">Draft in Kirags</div>
                    <div className="text-gray-400 ml-4">Saved</div>
                </div>
                <div className="flex items-center">
                    
                    <div className="ml-4 relative">
                        <button className="focus:outline-none">
                            <div className="h-8 w-8 rounded-full bg-gray-600 text-white flex items-center justify-center">
                                U
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-grow p-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <button className="text-gray-400 hover:text-gray-600 focus:outline-none mr-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </button>
                        <div className="border-l border-gray-300 h-10 mr-4 "></div>
                        <input
                            type="text"
                            className="w-full text-4xl font-extralight text-gray-700 placeholder-gray-400 focus:outline-none font-serif"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <textarea
                        className="w-full  font-extralight text-xl text-gray-700 placeholder-gray-400 focus:outline-none h-96 font-serif pl-16"
                        placeholder="Tell your story..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <div className=' flex justify-center '>

                        <button onClick={async () => {
                            try {
                                setIsDisabled(true);
                                const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                    title,
                                    content
                                }, {
                                    headers: {
                                        Authorization: localStorage.getItem('token')
                                    }
                                });
                                navigate(`/blog/${res.data.id}`)
                            } catch(e) {
                                alert("Error publishing blog: " + e);
                            } finally {
                                setIsDisabled(false)
                            }
                        }}
                            disabled={isDisabled}
                            className="relative inline-block px-4 py-2 font-medium group ">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Publish</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

