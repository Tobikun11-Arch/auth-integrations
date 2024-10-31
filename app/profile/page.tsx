import { redirect } from "next/navigation"
import { signIn, auth } from "../auth"

export default async function SignIn() {
    const session = await auth()
    console.log(session)
    const user = session?.user
    if(session) redirect('/dashboard')

    return user ? ('') : 
    (<>
        <div className="h-screen flex bg-gray-950 justify-center items-center">
                <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                    >
                    <button type="submit" className='flex text-white font-bold bg-blue-800 py-2 px-5 items-center justify-center gap-2 rounded-md'>
                            <div className={`w-6 h-6 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png')] bg-cover bg-center`}></div>
                            <p className='text-xs'>Sign in</p>
                        </button>
                    </form>
        </div>
    </>)
} 