'use client';
import {signOut, useSession} from 'next-auth/react'
import { redirect } from 'next/navigation'


export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    }
  })


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-8">{session?.data?.user?.email }</div>
      <button className="btn btn-error" onClick={() => signOut()}>LogOut</button>
    </main>
  )
}


Home.requiresAuth = true