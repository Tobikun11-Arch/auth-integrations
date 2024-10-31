import { auth, signOut } from '../auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
    //added home
    const session = await auth()
    if(!session) redirect('/')
    
    return (
        <div className="h-screen flex flex-col bg-gray-950 justify-center items-center">
            <h1>Welcome to auth integration {session.user?.name}</h1>
            <form action={async () => {
                "use server"
                await signOut()
            }}>
                <button type='submit' className='flex text-white font-bold bg-blue-800 py-2 px-5 items-center justify-center gap-2 rounded-md'>Sign out</button>
            </form>
        </div>
    )
}