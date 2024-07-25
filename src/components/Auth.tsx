import { SignupInput } from "@rajukumarsingh12003/medium-blog"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({ type }: { type: 'signup' | 'signin' }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`, postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem('token', jwt);
            navigate('/blogs')
        } catch (e) {
            alert('Wrong inputs!!')
        }
    };

    return (
        <div className="h-screen flex justify-center flex-col ">
            <div className=" flex justify-center">
                <div>
                    <div className=" text-4xl font-bold px-10">
                        Create an account
                    </div>
                    <div className=" text-slate-400 mt-1 text-center">
                        {type === 'signup' ? 'Already have a account?': "Don't have an account?"} 
                        <Link className=" underline pl-2" to={type==='signup'? '/signin': '/signup'}>{type==='signup'? 'Login' : 'Sign Up'}</Link>
                    </div>

                    {type === 'signup' ? 
                        <LabledInput label="Name" placeholder="Raju singh..." onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} />
                     :
                        null
                    }
                    
                    <LabledInput label="Email" placeholder="rajuk@gmail.com.." onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabledInput label="Password" type={'password'} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <div className="flex justify-center mt-8">
                        <button onClick={sendRequest} className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">{type === 'signup' ? 'Sign Up' : 'Login'}</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

interface labeledInputTypes{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?:string,
};

function LabledInput({ label,type, placeholder, onChange }: labeledInputTypes) {
    return (
        <div className=" pt-4">
            <label className="block mb-2 text-sm text-black font-extrabold ">{ label }</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900
             text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
};
