import { redirect } from "next/navigation"
import { signIn, auth } from "../auth"
import Image from "next/image"

export default async function SignIn() {
    const session = await auth()
    console.log(session)
    const user = session?.user
    if(session) redirect('/dashboard')

    return user ? ('') : 
    (<>
        <div className="h-screen flex bg-white justify-center items-center">
            <div className="flex flex-col gap-2">
                <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                    >
                    <button type="submit" className='flex text-black font-bold border border-gray-500 py-2 px-5 items-center justify-center gap-2 rounded-md'>
                        <Image
                        src="/Google.webp"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                        />
                        <p className='text-xs'>Sign in with Google</p>
                    </button>
                </form>

                <form
                    action={async () => {
                        "use server"
                        await signIn("facebook")
                    }}
                    >
                    <button type="submit" className='flex text-black font-bold border border-gray-500 py-2 pl-5 pr-2 items-center justify-center gap-2 rounded-md'>
                        <Image
                        src="/Facebook_Logo.webp"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                        />
                        <p className='text-xs'>Sign in with Facebook</p>
                    </button>
                </form>
            </div>
        </div>
    </>)
} 