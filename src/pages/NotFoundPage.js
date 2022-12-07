import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 5000)
    }, [navigate])
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-primary-bg">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-green-htb px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
        </div>
        <button class="mt-5">
            <a href="/"
                class="relative
                group
                text-sm
                font-medium
                inline-block
                text-green-htb
                active:text-green-htb
                focus:outline-none
                focus:ring">
                
                <span
                    class="absolute
                    inset-0
                    transition-transform
                    translate-x-0.5
                    translate-y-0.5
                    bg-green-htb
                    group-hover:translate-y-0
                    group-hover:translate-x-0
                    rounded-xl">
                </span>

                <span class="relative block px-8 py-3 bg-primary-bg border border-current rounded-xl">
                    <router-link to="/">Go Home</router-link>
                </span>
            </a>
        </button>
    </main>
  )
}
