'use client'
import Image from "next/image"


const people = [
    {
      name: 'Abdelahk Mekaoui',
      role: 'President',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        "name": "Leslie Alexander",
        "role": "Co-Founder / CEO",
        "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        "name": "Jessica Walker",
        "role": "Chief Marketing Officer",
        "imageUrl": "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        "name": "David Anderson",
        "role": "CTO / Technology Lead",
        "imageUrl": "https://images.unsplash.com/photo-1554252180-d9fe13a22d26?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        "name": "Emily Foster",
        "role": "Product Manager",
        "imageUrl": "https://images.unsplash.com/photo-1547807321-36b98f5817e5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        "name": "Benjamin Cooper",
        "role": "Lead Designer",
        "imageUrl": "https://images.unsplash.com/photo-1573497018-19a83745d80d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-primary py-24 sm:py-32 min-h-screen">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image 
                    className="h-16 w-16 rounded-full" 
                    src={person.imageUrl} 
                    width={100}
                    height={100}
                    alt="" 
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }