import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"
const CartButton = () => {
    const router=useRouter()
    return (
        
            <Link href="/cart/111" >
            {/* <span className="material-icons-outlined relative cursor-pointer">
shopping_cart
<span className="absolute -top-5 w-2 h-2 text-white">5</span>p
</span> */}
<a className="material-icons-outlined relative inline-block"> 
shopping_cart
<span className="absolute -top-2 -right-1 w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
<span className="text-white">4</span>
</span>
</a>

            </Link>

       
    )
}

export default CartButton
