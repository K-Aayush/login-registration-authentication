import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Login Page',
}

const Login = () => {
    return (
        <div className='min-h-screen bg-blue-500'>
            <div className='container mx-auto md:py-30 lg:py-20 py-20 md:transition-all lg:transition-all'>
                <div className='flex flex-col w-10/12 lg:flex-row lg:w-10/12 md:flex-row md:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden relative'>
                    <div className='lg:w-1/2 md:w-1/2 w-full relative transition-opacity'>
                        <div className='aspect-square'>
                            <Image
                                className='object-contain md:object-cover lg:object-cover'
                                src="/women-headset.jpg"
                                alt=''
                                layout='fill'
                            />
                        </div>
                        <hr />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2 py-4 px-4 md:py-8 md:px-5 lg:px-12 lg:py-20'>
                        <div>
                            <h1 className='text-gray-800 text-md lg:text-3xl lg:font-extrabold'>Login to your account</h1>
                        </div>
                       
                        <form action="#" className='mt-4'>
                            <div className='flex flex-col gap-2 md:gap-2 lg:gap-4'>
                                <div className='border rounded-xl relative'>
                                    <input
                                        className='w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none'
                                        type="email"
                                        name='email'
                                        placeholder='Email'
                                    />
                                </div>
                                <div className='border rounded-xl relative mb-4'>
                                    <input
                                        className='w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none'
                                        type="password"
                                        name='password'
                                        placeholder='Password'
                                    />

                                </div>
                            </div>

                            <div className='flex flex-col gap-2 md:gap-2 lg:gap-4'>
                                <button
                                    className='w-full bg-gradient-to-r from-blue-500 to bg-indigo-500 py-3 text-gray-50 text-lg rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-bg-gray-100 hover:bg-gray-100 hover:text-gray-700 hover:border hover:border-slate-500'
                                    type='submit'
                                >
                                    Login
                                </button>

                                <button
                                    className='w-full flex justify-center py-3 gap-2 border hover:bg-gray-200 rounded-xl'
                                    type='button'
                                >
                                    Sign In With Google <Image src='/googlelogo.png' alt='' width={24} height={24} />
                                </button>

                                <button
                                    className='w-full flex justify-center py-3 gap-2 border hover:bg-gray-200 rounded-xl'
                                    type='button'
                                >
                                    Sign In With Github <Image src='/githublogo.png' alt='' width={24} height={24} />
                                </button>
                            </div>

                            <div className='flex gap-2 mt-4 md:gap-1 md:mt-3 lg:gap-2 lg:mt-4'>
                                <p className='text-center text-gray-400'>
                                    Don`t have an account?
                                    <Link className='text-indigo-700' href={'/register'}> Sign Up</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // <div className='flex min-h-screen bg-blue-400'>
        //     <div className='lg:m-auto md:my-5 bg-slate-50 rounded-md w-3/5 h-4/5 grid lg:grid-cols-2'>

        //         {/* image div */}
        //         <div className='relative w-full'>
        //             <div className='aspect-square'>
        //             <Image
        //                 className='object-cover'
        //                 src='/women-headset.jpg'
        //                 alt=''
        //                 layout='fill'
        //             />
        //             </div>
        //             <div className='absolute mx-2 w-full text-start top-3 z-50'>
        //                 <strong className='text-gradient-to-r from-blue-500 to text-indigo-500 font-bold lg:text-xl'>Welcome to Login Page.</strong>
        //             </div>
        //         </div>

        //         {/* form div */}
        //          <div className='flex flex-col justify-evenly'>
        //             <div className='text-center lg:py-10 md:py-5 py-2'>
        //                 <section className='lg:w-10/12 md:w-10/12 w-11/12 mx-auto flex flex-col gap-10'>
        // <div>
        //     <h1 className='text-gray-800 text-md lg:text-xl lg:font-extrabold'>Login to your account</h1>
        // </div>

        //                     <form action="#" className='flex flex-col gap-5'>
        //                         <div className='flex border rounded-xl relative'>
        // <input
        //     className='w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none'
        //     type="email"
        //     name='email'
        //     placeholder='Email'
        // />
        //                         </div>

        //                         <div className='flex border rounded-xl relative'>
        //                             <input
        //                                 className='w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none focus:border-none'
        //                                 type="password"
        //                                 name='password'
        //                                 placeholder='Password'
        //                             />
        //                         </div>

        //                         <div className=''>
        // <button
        //     className='w-full bg-gradient-to-r from-blue-500 to bg-indigo-500 py-3 text-gray-50 text-lg rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-bg-gray-100 hover:bg-gray-100 hover:text-gray-700 hover:border hover:border-slate-500'
        //     type='submit'
        // >
        //     Login
        // </button>
        //                         </div>
        //                         <div>
        // <button 
        // className='w-full flex justify-center py-3 gap-2 border hover:bg-gray-200 rounded-xl'
        // type='button'
        // >
        //     Sign In With Google <Image src='/googlelogo.png' alt='' width={24} height={24}/>
        // </button>
        //                         </div>
        //                         <div>
        //                             <button 
        //                             className='w-full flex justify-center py-3 gap-2 border hover:bg-gray-200 rounded-xl'
        //                             type='button'
        //                             >
        //                                 Signin With Github <Image src='/githublogo.png' alt='' width={24} height={24}/>
        //                             </button>
        //                         </div>

        //                         <p className='text-center text-gray-400'>
        //                             Don`t have an account?
        //                             <Link className='text-indigo-700' href={'/register'}> Sign Up</Link>
        //                         </p>

        //                     </form>
        //                 </section>
        //             </div> 
        //         </div>
        //     </div>
        // </div>
    )
}

export default Login