'use client'

import type { Metadata } from 'next'
import Image from 'next/image';
import { useState } from 'react'
import Link from 'next/link'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import style from './page.module.css'

export const metadata: Metadata = {
  title: 'Register Page',
}

const Register = () => {
  const [show, setShow] = useState({password:false, cpassword:false});

    return (
        <div className='min-h-screen bg-blue-500'>
            <div className='container mx-auto md:py-30 lg:py-20 py-20 md:transition-all lg:transition-all'>
                <div className='flex flex-col w-10/12 lg:flex-row lg:w-10/12 md:flex-row md:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden relative'>
                    <div className='lg:w-1/2 md:w-1/2 w-full relative transition-opacity'>
                        <div className='aspect-square'>
                            <Image
                                className='object-contain md:object-cover lg:object-cover'
                                src="/stock.jpg"
                                alt=''
                                layout='fill'
                            />
                        </div>
                        <hr />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2 py-4 px-4 md:py-8 md:px-5 lg:px-12 lg:py-20'>
                        <div>
                            <h1 className='text-gray-800 text-md lg:text-3xl lg:font-extrabold'>Create an account</h1>
                        </div>
                       
                        <form action="#" className='mt-4'>
                            <div className='flex flex-col gap-2 md:gap-2 lg:gap-4'>
                            <div className='flex border rounded-xl relative'>
                                    <input
                                        className={`${style.input_text} w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none`}
                                        type="text"
                                        name='username'
                                        placeholder='Username'
                                    />
                                    <span className='icon absolute h-full right-0 top-0 flex items-center px-4'>
                                        <HiOutlineUser size={25} />
                                    </span>
                                </div>
                                <div className='flex border rounded-xl relative'>
                                    <input
                                        className={`${style.input_text} w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none`}
                                        type="email"
                                        name='email'
                                        placeholder='Email'
                                    />
                                    <span className='icon absolute h-full right-0 top-0 flex items-center px-4'>
                                        <HiAtSymbol size={25} />
                                    </span>
                                </div>
                                <div className='border rounded-xl relative'>
                                    <input
                                        className={`${style.input_text} w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none`}
                                        type={`${show.password ? "text" : "password"}`}
                                        name='password'
                                        placeholder='Password'
                                    />
                                    <span className='absolute h-full right-0 top-0 flex items-center px-4'  onClick={() => setShow({...show, password: !show.password})}>
                                        <HiFingerPrint size={25} />
                                    </span>
                                </div>
                                <div className='border rounded-xl relative mb-4'>
                                    <input
                                        className={`${style.input_text} w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none`}
                                        type={`${show.cpassword ? "text" : "password"}`}
                                        name='cpassword'
                                        placeholder='Confirm Password'
                                    />
                                    <span className='absolute h-full right-0 top-0 flex items-center px-4'  onClick={() => setShow({...show, cpassword: !show.cpassword})}>
                                        <HiFingerPrint size={25} />
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 md:gap-2 lg:gap-4'>
                                <button
                                    className='w-full bg-gradient-to-r from-blue-500 to bg-indigo-500 py-3 text-gray-50 text-lg rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-bg-gray-100 hover:bg-gray-100 hover:text-gray-700 hover:border hover:border-slate-500'
                                    type='submit'
                                >
                                    Sign up
                                </button>
                            </div>

                            <div className='flex gap-2 mt-4 md:gap-1 md:mt-3 lg:gap-2 lg:mt-4'>
                                <p className='text-center text-gray-400'>
                                    Already have an account?
                                    <Link className='text-indigo-700' href={'/login'}> Sign In</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register