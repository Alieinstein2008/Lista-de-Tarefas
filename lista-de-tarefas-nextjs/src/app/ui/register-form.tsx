import Link from "next/link";
export default function RegisterForm() {
    return (
        <div className="w-full h-full">
            <section className=" w-full h-full p-2 bg-white flex justify-center ">
                <div className="flex items-center justify-center my-3">
                    <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2" />
                        <h2 className="text-2xl font-bold leading-tight">
                            Sign up to create account
                        </h2>
                        <div className="w-full mt-2 text-base flex flex-row gap-1">
                            <p className="text-gray-600 inline-flex"> Already have an account?</p>
                            <Link
                                className=" text-blue-600 inline-flex"
                                href={'/login'}
                            >
                                Sign In
                            </Link>
                        </div>
                        <form className="mt-5">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        User Name
                                    </label>
                                    <div className="mt-2">
                                        <input placeholder="Full Name" type="text" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="user_name" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input placeholder="Email" type="email" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="email" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-base font-medium text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input placeholder="Password" type="password" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="password" />
                                    </div>
                                </div>
                                <div>
                                    <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/90 cursor-pointer" type="button">
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}