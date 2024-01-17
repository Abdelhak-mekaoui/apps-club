'use client';
import ProductService from "@/services/ProductService"
import { useSession } from "next-auth/react";
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

  export default function Products() {
 
    
    const session = useSession();

    const productService = new ProductService(session)
    const [products, setProducts] = useState<any[]>([]) ; 
useEffect(() => {
  
productService.getAll().then((query)=>{
  let _data : any[] = []
  query.forEach((doc) => {

    _data.push( {...doc.data() , id : doc.id} ) 
   setProducts(_data);
   
  });
})
 
}, [])
const router = useRouter()

    
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                  width={100}
                  height={100}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    onClick={()=>router.push(`/products/${product.id}`)}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  